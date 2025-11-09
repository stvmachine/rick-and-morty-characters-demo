import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from '@/components/ui/pagination'
import { usePagination, DOTS } from '@/hooks/usePagination'

interface PaginationControlsProps {
  currentPage: number
  totalCount: number
  pageSize: number
  onPageChange: (page: number) => void
  siblingCount?: number
}

export function PaginationControls({
  currentPage,
  totalCount,
  pageSize,
  onPageChange,
  siblingCount = 1,
}: PaginationControlsProps) {
  const paginationRange = usePagination({
    totalCount,
    pageSize,
    siblingCount,
    currentPage,
  })

  const totalPages = Math.ceil(totalCount / pageSize)
  const canGoPrevious = currentPage > 1
  const canGoNext = currentPage < totalPages

  if (totalPages <= 1) {
    return null
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => canGoPrevious && onPageChange(currentPage - 1)}
            className={
              !canGoPrevious
                ? 'pointer-events-none opacity-50'
                : 'cursor-pointer'
            }
          />
        </PaginationItem>

        {paginationRange.map((pageNum, idx) => (
          <PaginationItem key={idx}>
            {pageNum === DOTS ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                onClick={() => typeof pageNum === 'number' && onPageChange(pageNum)}
                isActive={pageNum === currentPage}
                className="cursor-pointer"
              >
                {pageNum}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            onClick={() => canGoNext && onPageChange(currentPage + 1)}
            className={
              !canGoNext
                ? 'pointer-events-none opacity-50'
                : 'cursor-pointer'
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

