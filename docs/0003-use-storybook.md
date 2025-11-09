# ADR-0003: Use Storybook for Component Development

## Status
Accepted

## Context
We need a way to develop, test, and document React components in isolation. This helps with:
- Visual testing of components in different states (loading, error, success)
- Component documentation for team members
- Development workflow that doesn't require running the full application
- Testing components without internet access or API dependencies

## Decision
We will use Storybook 8.6.14 for component development and documentation. Components will be refactored to accept props (data, loading, error) instead of directly calling GraphQL, making them easier to test and document in Storybook.

Key configuration:
- Storybook with React and Vite integration
- Tailwind CSS support via Vite plugin
- Path aliases configured for `@/` imports
- Mock data for stories to work offline
- Stories for all main components (CharacterCard, CharacterList, PaginationControls)

## Consequences
### Positive
- Components can be developed and tested in isolation
- Visual documentation of all component states
- Works offline with mock data (no API dependency)
- Better component design through separation of concerns
- Easier onboarding for new team members
- Can test edge cases and error states easily

### Negative
- Additional dependency and build configuration
- Need to maintain stories alongside components
- Initial setup time for Storybook configuration
- Components need to be refactored to accept props (which is actually a positive for testability)

## Alternatives Considered
1. **Manual component testing pages** - Too much maintenance, not reusable
2. **Testing libraries only (Vitest, React Testing Library)** - Good for unit tests but doesn't provide visual component documentation
3. **Component playground in main app** - Pollutes production code, harder to maintain
4. **Other storybook alternatives (Chromatic, etc.)** - Storybook is the industry standard and most widely adopted

