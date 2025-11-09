import { renderHook } from '@testing-library/react'
import { usePagination, DOTS } from './usePagination'

describe('usePagination', () => {
  it('returns all pages when total pages is less than page numbers to show', () => {
    const { result } = renderHook(() =>
      usePagination({
        totalCount: 40,
        pageSize: 20,
        currentPage: 1,
      })
    )

    expect(result.current).toEqual([1, 2])
  })

  it('returns left dots and right range when on first pages', () => {
    const { result } = renderHook(() =>
      usePagination({
        totalCount: 200,
        pageSize: 20,
        currentPage: 1,
      })
    )

    expect(result.current[0]).toBe(1)
    expect(result.current[1]).toBe(2)
    expect(result.current[result.current.length - 2]).toBe(DOTS)
    expect(result.current[result.current.length - 1]).toBe(10)
  })

  it('returns left range and right dots when on last pages', () => {
    const { result } = renderHook(() =>
      usePagination({
        totalCount: 200,
        pageSize: 20,
        currentPage: 10,
      })
    )

    expect(result.current[0]).toBe(1)
    expect(result.current[1]).toBe(DOTS)
    expect(result.current[result.current.length - 1]).toBe(10)
  })

  it('returns both left and right dots when in middle pages', () => {
    const { result } = renderHook(() =>
      usePagination({
        totalCount: 200,
        pageSize: 20,
        currentPage: 5,
      })
    )

    expect(result.current[0]).toBe(1)
    expect(result.current[1]).toBe(DOTS)
    expect(result.current[result.current.length - 2]).toBe(DOTS)
    expect(result.current[result.current.length - 1]).toBe(10)
  })

  it('handles siblingCount parameter', () => {
    const { result } = renderHook(() =>
      usePagination({
        totalCount: 200,
        pageSize: 20,
        currentPage: 5,
        siblingCount: 2,
      })
    )

    expect(result.current).toEqual(
      expect.arrayContaining([3, 4, 5, 6, 7])
    )
  })

  it('handles single page', () => {
    const { result } = renderHook(() =>
      usePagination({
        totalCount: 10,
        pageSize: 20,
        currentPage: 1,
      })
    )

    expect(result.current).toEqual([1])
  })
})
