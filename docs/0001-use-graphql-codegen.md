# ADR-0001: Use GraphQL Code Generator for Type Safety

## Status
Accepted

## Context
We need to fetch and display characters from the Rick & Morty GraphQL API. The requirements specify using TypeScript and a GraphQL client. To ensure type safety and reduce manual type definitions, we need a solution that automatically generates TypeScript types from our GraphQL queries.

## Decision
We will use GraphQL Code Generator (`@graphql-codegen/cli`) with the following plugins:
- `@graphql-codegen/typescript` - Generates base TypeScript types from the GraphQL schema
- `@graphql-codegen/typescript-operations` - Generates types for queries, mutations, and fragments
- `@graphql-codegen/typed-document-node` - Generates TypedDocumentNode for Apollo Client v4

This approach provides:
- Automatic type generation from GraphQL schema and queries
- TypedDocumentNode support for Apollo Client v4 (recommended approach)
- Type-safe queries when used with Apollo Client's `useQuery` hook
- Reduced boilerplate and manual type definitions
- Compile-time validation of queries

## Consequences
### Positive
- Full type safety for GraphQL operations
- TypedDocumentNode works seamlessly with Apollo Client v4
- Compile-time errors catch query mistakes early
- Single source of truth (GraphQL schema)
- Better type inference than generated hooks in Apollo Client v4

### Negative
- Additional build step required (codegen)
- Generated files need to be committed or gitignored
- Slight learning curve for team members

## Alternatives Considered
1. **Manual TypeScript interfaces** - Too much boilerplate and error-prone
2. **GraphQL Code Generator with `typescript-react-apollo` plugin** - Generated hooks have compatibility issues with Apollo Client v4 and lack proper type inference
3. **TypedDocumentNode approach** - Selected as it's the recommended approach for Apollo Client v4, providing better type safety and inference
4. **Other GraphQL clients** - Apollo Client is well-established and has excellent codegen support

