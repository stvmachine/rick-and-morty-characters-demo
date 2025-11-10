# Rick and Morty Character Viewer

A React + TypeScript application that fetches and displays characters from the Rick & Morty GraphQL API with pagination support.

## Features

- 🎨 Modern UI built with shadcn/ui components
- 🔍 Type-safe GraphQL queries using Apollo Client
- 📄 Automatic TypeScript type generation from GraphQL schema
- ⚡ Fast development with Vite
- 🎯 Pagination support (20 characters per page)
- 💫 Loading states and error handling

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Apollo Client** - GraphQL client
- **GraphQL Code Generator** - Auto-generate TypeScript types
- **shadcn/ui** - UI component library
- **Tailwind CSS** - Styling

## Prerequisites

- Node.js 22.12 
- pnpm 10+

## Setup

1. Install dependencies:
```bash
pnpm install
```

2. Generate GraphQL types:
```bash
pnpm codegen
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm codegen` - Generate TypeScript types from GraphQL schema
- `pnpm test` - Run tests
- `pnpm test:ui` - Run tests with UI
- `pnpm storybook` - Start Storybook development server
- `pnpm build-storybook` - Build static Storybook for deployment

## Project Structure

```
src/
├── components/
│   ├── ui/          # shadcn/ui components
│   ├── CharacterCard.tsx
│   ├── CharacterList.tsx
│   └── PaginationControls.tsx
├── screens/         # Screen-level components (linked to GraphQL queries)
│   └── CharacterScreen.tsx
├── hooks/           # Custom React hooks
│   └── usePagination.ts
├── queries/         # GraphQL query files
├── generated/       # Auto-generated GraphQL types
├── lib/             # Utility functions
├── test/            # Test setup files
└── main.tsx         # App entry point
```

## GraphQL API

This app uses the [Rick and Morty GraphQL API](https://rickandmortyapi.com/graphql).

## Storybook

This project uses Storybook for component development and documentation. All components have stories that can be viewed in isolation.

To start Storybook:
```bash
pnpm storybook
```

This will open Storybook at [http://localhost:6006](http://localhost:6006).

Stories work offline with mock data and don't require internet access. You can view different component states:
- **CharacterCard** - Default, without image, unknown species
- **CharacterList** - Default (with data), Loading, Error states
- **PaginationControls** - Default, middle page, last page, many pages

## Testing

This project uses Vitest and React Testing Library for unit and component testing.

To run tests:
```bash
pnpm test
```

To run tests in watch mode:
```bash
pnpm test --watch
```

### Testing Strategy

- **Unit Tests**: Custom hooks (e.g., `usePagination`)
- **Component Tests**: React components with mock data (no GraphQL mocking)
- **Visual Tests**: Storybook stories for component states

### Future Testing Considerations

The following testing approaches are not currently implemented but could be added:
- E2E testing (e.g., Playwright, Cypress)
- GraphQL query mocking (using MSW or Apollo Client mocks)
- Integration tests for full user flows

## Architecture Decisions

See the `docs/` directory for Architectural Decision Records (ADRs):
- `0001-use-graphql-codegen.md` - Decision to use GraphQL Code Generator
- `0002-use-shadcn-ui.md` - Decision to use shadcn/ui for components
- `0003-use-storybook.md` - Decision to use Storybook for component development
- `0004-use-vitest-and-react-testing-library.md` - Decision to use Vitest and React Testing Library
