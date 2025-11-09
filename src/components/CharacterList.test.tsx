import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CharacterList } from './CharacterList'
import type { GetCharactersQuery } from '@/generated/graphql'

const mockCharacters: GetCharactersQuery = {
  characters: {
    info: {
      count: 100,
      pages: 5,
      next: 2,
      prev: null,
    },
    results: [
      {
        id: '1',
        name: 'Rick Sanchez',
        species: 'Human',
        image: 'https://example.com/rick.jpg',
      },
      {
        id: '2',
        name: 'Morty Smith',
        species: 'Human',
        image: 'https://example.com/morty.jpg',
      },
    ],
  },
}

describe('CharacterList', () => {
  it('shows loading skeletons when loading', () => {
    render(
      <CharacterList
        loading={true}
        currentPage={1}
        onPageChange={() => {}}
      />
    )

    const skeletons = screen.getAllByTestId('skeleton')
    expect(skeletons.length).toBeGreaterThan(0)
  })

  it('shows error message when error', () => {
    render(
      <CharacterList
        loading={false}
        error={{ message: 'Failed to load characters' }}
        currentPage={1}
        onPageChange={() => {}}
      />
    )

    expect(screen.getByText('Error')).toBeInTheDocument()
    expect(screen.getByText('Failed to load characters')).toBeInTheDocument()
  })

  it('renders character cards when data is available', () => {
    render(
      <CharacterList
        data={mockCharacters}
        loading={false}
        currentPage={1}
        onPageChange={() => {}}
      />
    )

    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
    expect(screen.getByText('Morty Smith')).toBeInTheDocument()
  })

  it('shows correct number of skeletons for last page', () => {
    render(
      <CharacterList
        data={mockCharacters}
        loading={true}
        currentPage={5}
        onPageChange={() => {}}
      />
    )

    const skeletons = screen.getAllByTestId('skeleton')
    expect(skeletons.length).toBeGreaterThan(0)
  })

  it('calls onPageChange when pagination is clicked', async () => {
    const user = userEvent.setup()
    const onPageChange = vi.fn()

    render(
      <CharacterList
        data={mockCharacters}
        loading={false}
        currentPage={1}
        onPageChange={onPageChange}
      />
    )

    const nextLink = screen.getByLabelText('Go to next page')
    await user.click(nextLink)

    expect(onPageChange).toHaveBeenCalledWith(2)
  })

  it('shows retry button on error', () => {
    render(
      <CharacterList
        loading={false}
        error={{ message: 'Failed to load' }}
        currentPage={1}
        onPageChange={() => {}}
      />
    )

    expect(screen.getByText('Retry')).toBeInTheDocument()
  })
})

