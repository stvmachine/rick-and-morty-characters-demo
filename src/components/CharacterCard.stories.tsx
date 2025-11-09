import type { Meta, StoryObj } from '@storybook/react';
import { CharacterCard } from './CharacterCard';

const meta = {
  title: 'Components/CharacterCard',
  component: CharacterCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CharacterCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    character: {
      id: '1',
      name: 'Rick Sanchez',
      species: 'Human',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    },
  },
};

export const WithoutImage: Story = {
  args: {
    character: {
      id: '2',
      name: 'Morty Smith',
      species: 'Human',
      image: null,
    },
  },
};

export const UnknownSpecies: Story = {
  args: {
    character: {
      id: '3',
      name: 'Alien Character',
      species: null,
      image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    },
  },
};

