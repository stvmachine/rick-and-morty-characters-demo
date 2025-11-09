import { render, screen } from '@testing-library/react'
import { CharacterCard } from './CharacterCard'

describe('CharacterCard', () => {
  const defaultCharacter = {
    id: '1',
    name: 'Rick Sanchez',
    species: 'Human',
    image: 'https://example.com/rick.jpg',
  }

  it('renders character and species name', () => {
    render(<CharacterCard character={defaultCharacter} />)

    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
    expect(screen.getByText('Human')).toBeInTheDocument()
  })

  it('renders character image with alt text', () => {
    render(<CharacterCard character={defaultCharacter} />)

    const image = screen.getByAltText('Rick Sanchez')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'https://example.com/rick.jpg')
  })

  it('handles missing image', () => {
    render(<CharacterCard character={{ ...defaultCharacter, image: null }} />)

    expect(screen.queryByAltText('Rick Sanchez')).not.toBeInTheDocument()
  })

  it('shows "Unknown" for missing name', () => {
    render(<CharacterCard character={{ ...defaultCharacter, name: null }} />)

    expect(screen.getByText('Unknown')).toBeInTheDocument()
  })

  it('shows "Unknown species" for missing species', () => {
    render(<CharacterCard character={{ ...defaultCharacter, species: null }} />)

    expect(screen.getByText('Unknown species')).toBeInTheDocument()
  })
})

