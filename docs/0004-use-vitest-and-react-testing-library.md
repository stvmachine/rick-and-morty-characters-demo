# ADR-0004: Use Vitest and React Testing Library for Component Testing

## Status
Accepted

## Context
We need a comprehensive testing strategy for our React components to ensure reliability, prevent regressions, and maintain code quality. While Storybook provides excellent visual testing and documentation, we need automated unit and integration tests that can run in CI/CD pipelines and provide fast feedback during development.

Key requirements:
- Fast test execution
- TypeScript support
- Works seamlessly with Vite
- Encourages testing user behavior, not implementation details
- Good developer experience
- CI/CD integration ready

## Decision
We will use **Vitest** as the test runner and **React Testing Library** as the testing utility for React components.

### Vitest
- Fast, Vite-native test runner
- Excellent TypeScript support
- Zero-config setup with Vite projects
- Compatible with Jest API (easy migration path)
- Built-in code coverage
- Watch mode for fast feedback

### React Testing Library
- Encourages testing user behavior and accessibility
- Simple, intuitive API
- Works with any testing framework
- Industry standard for React testing
- Promotes accessible components by default

### Testing Strategy

**What to Test:**
- User interactions (clicks, form submissions, navigation)
- Conditional rendering (loading, error, success states)
- Business logic (pagination calculations, data transformations)
- Accessibility (ARIA labels, keyboard navigation)
- Edge cases (empty states, error handling, last page)

**What NOT to Test:**
- Implementation details (internal state, method calls)
- Third-party libraries (shadcn/ui, Apollo Client internals)
- Styling (handled by Storybook visual testing)
- Simple prop passing

**Testing Pyramid:**
1. **Unit Tests** (Base) - Individual components, hooks, utilities
2. **Integration Tests** (Middle) - Component interactions, data flow
3. **Visual Tests** (Top) - Storybook for visual regression

## Consequences
### Positive
- Fast test execution with Vitest's native Vite integration
- Type-safe testing with TypeScript
- Encourages accessible, user-focused components
- Easy CI/CD integration
- Good developer experience with watch mode
- Complements Storybook (visual testing) with automated testing
- Industry-standard approach, easy for new team members

### Negative
- Additional dependencies and configuration
- Need to maintain test files alongside components
- Learning curve for team members unfamiliar with RTL
- Initial setup time

## Alternatives Considered
1. **Jest + React Testing Library** - More established but slower, requires more configuration with Vite
2. **Cypress Component Testing** - Better for E2E, but overkill for unit/integration tests, slower execution
3. **Testing Library only** - Need a test runner anyway, Vitest is the natural choice with Vite
4. **No automated testing** - High risk of regressions, poor code quality over time
5. **Storybook only** - Great for visual testing but doesn't provide automated regression prevention

## Implementation Notes
- Use `happy-dom` as test environment (faster than jsdom, sufficient for React component tests)
- Test files co-located with components: `ComponentName.test.tsx`
- Focus on testing user behavior and accessibility
- Use `@testing-library/user-event` for realistic user interactions
- Keep tests simple, focused, and maintainable
- Use mock data objects instead of GraphQL query mocking (components accept props, enabling isolated testing)

