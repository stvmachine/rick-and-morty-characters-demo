import type { Meta, StoryObj } from '@storybook/react';
import { PaginationControls } from './PaginationControls';
import { useState } from 'react';
import React from 'react';

const meta = {
  title: 'Components/PaginationControls',
  component: PaginationControls,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaginationControls>;

export default meta;
type Story = StoryObj<typeof meta>;

const PaginationWrapper = (args: React.ComponentProps<typeof PaginationControls>) => {
  const [page, setPage] = useState(args.currentPage);
  return (
    <PaginationControls
      currentPage={page}
      totalCount={args.totalCount}
      pageSize={args.pageSize}
      onPageChange={setPage}
      siblingCount={args.siblingCount}
    />
  );
};

export const Default: Story = {
  render: PaginationWrapper,
  args: {
    currentPage: 1,
    totalCount: 100,
    pageSize: 20,
    onPageChange: () => {},
  },
};

export const MiddlePage: Story = {
  render: PaginationWrapper,
  args: {
    currentPage: 5,
    totalCount: 200,
    pageSize: 20,
    onPageChange: () => {},
  },
};

export const LastPage: Story = {
  render: PaginationWrapper,
  args: {
    currentPage: 10,
    totalCount: 200,
    pageSize: 20,
    onPageChange: () => {},
  },
};

export const ManyPages: Story = {
  render: PaginationWrapper,
  args: {
    currentPage: 25,
    totalCount: 1000,
    pageSize: 20,
    onPageChange: () => {},
  },
};

