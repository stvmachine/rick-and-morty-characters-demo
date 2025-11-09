# ADR-0001: Use GraphQL Code Generator for Type Safety

## Status
Accepted

## Context
We need to fetch and display characters from the Rick & Morty GraphQL API. The requirements specify using TypeScript and a GraphQL client. To ensure type safety and reduce manual type definitions, we need a solution that automatically generates TypeScript types from our GraphQL queries.

## Decision
We will use GraphQL Code Generator (`@graphql-codegen/cli`) with the following plugins:
- `@graphql-codegen/typescript` - Generates base TypeScript types from the GraphQL schema
- `@graphql-codegen/typescript-operations` - Generates types for queries, mutations, and fragments
- `@graphql-codegen/typescript-react-apollo` - Generates React hooks for Apollo Client

This approach provides:
- Automatic type generation from GraphQL schema and queries
- Type-safe React hooks for data fetching
- Reduced boilerplate and manual type definitions
- Compile-time validation of queries

## Consequences
### Positive
- Full type safety for GraphQL operations
- Auto-generated React hooks reduce boilerplate
- Compile-time errors catch query mistakes early
- Single source of truth (GraphQL schema)

### Negative
- Additional build step required (codegen)
- Generated files need to be committed or gitignored
- Slight learning curve for team members

## Alternatives Considered
1. **Manual TypeScript interfaces** - Too much boilerplate and error-prone
2. **GraphQL Code Generator with different plugins** - Current selection provides best Apollo Client integration
3. **Other GraphQL clients** - Apollo Client is well-established and has excellent codegen support

