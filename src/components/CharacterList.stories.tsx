import type { Meta, StoryObj } from '@storybook/react';
import { CharacterList } from './CharacterList';
import type { GetCharactersQuery } from '@/generated/graphql';
import { useState } from 'react';
import React from 'react';

const meta = {
  title: 'Components/CharacterList',
  component: CharacterList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CharacterList>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockData: GetCharactersQuery = {
  characters: {
    __typename: 'Characters',
    info: {
      __typename: 'Info',
      count: 826,
      pages: 42,
      next: 2,
      prev: null,
    },
    results: [
      {
        __typename: 'Character',
        id: '1',
        name: 'Rick Sanchez',
        species: 'Human',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      },
      {
        __typename: 'Character',
        id: '2',
        name: 'Morty Smith',
        species: 'Human',
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      },
      {
        __typename: 'Character',
        id: '3',
        name: 'Summer Smith',
        species: 'Human',
        image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
      },
      {
        __typename: 'Character',
        id: '4',
        name: 'Beth Smith',
        species: 'Human',
        image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
      },
    ],
  },
};

const CharacterListWrapper = (args: React.ComponentProps<typeof CharacterList>) => {
  const [page, setPage] = useState(args.currentPage);
  return (
    <CharacterList
      {...args}
      currentPage={page}
      onPageChange={setPage}
    />
  );
};

export const Default: Story = {
  render: CharacterListWrapper,
  args: {
    data: mockData,
    loading: false,
    currentPage: 1,
    onPageChange: () => {},
  },
};

export const Loading: Story = {
  args: {
    data: undefined,
    loading: true,
    currentPage: 1,
    onPageChange: () => {},
  },
};

export const Error: Story = {
  args: {
    data: undefined,
    loading: false,
    error: {
      message: 'Failed to fetch characters',
    },
    currentPage: 1,
    onPageChange: () => {},
  },
};