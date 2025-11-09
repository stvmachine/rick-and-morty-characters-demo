# ADR-0002: Use shadcn/ui for UI Components

## Status
Accepted

## Context
We need to build a React UI that displays characters with loading states, error messages, and pagination. We want a modern, accessible, and customizable component library that integrates well with React and TypeScript.

## Decision
We will use shadcn/ui, a collection of re-usable components built with Radix UI and Tailwind CSS. Components are copied into the project (not installed as dependencies), giving us full control over customization.

## Consequences
### Positive
- Full control over component code - can customize as needed
- Built on Radix UI primitives - excellent accessibility
- Uses Tailwind CSS - consistent styling approach
- TypeScript-first - full type safety
- Modern, beautiful default designs

### Negative
- Components are copied into project (larger codebase)
- Need to manage Tailwind CSS configuration
- Learning curve for team members unfamiliar with shadcn/ui

## Alternatives Considered
1. **Material-UI (MUI)** - Too opinionated, harder to customize
2. **Ant Design** - Heavy bundle size, less modern
3. **Chakra UI** - Good alternative, but shadcn/ui offers more control
4. **Custom components** - Too much development time

