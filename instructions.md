# Engineer Frontend Test

**Task:** Build a React + TypeScript app that fetches characters from the Rick & Morty GraphQL API and displays them in a paginated UI.

**Objective:** Show `name`, `species`, and `image` for each character. Show loading and error states. Pagination: 20 characters per page. Use a GraphQL client.

---

## Guidelines

We are interested in your coding style and how you solve problems.  
Please add comments where relevant — this helps us understand your solution and what you might improve in future iterations.

---

## Requirements

1. Display the following fields for Characters from `https://rickandmortyapi.com/graphql`:
   - Name  
   - Species  
   - Image
2. Display a loading state while fetching the data.
3. Show an error message if data fetching fails.
4. Allow pagination (20 characters at a time).
5. Build using **TypeScript**, **React**, and a **GraphQL client**.

---

## GraphQL Endpoint

> **URL:** [https://rickandmortyapi.com/graphql](https://rickandmortyapi.com/graphql)

### Example GraphQL Query

```graphql
{
  characters(page: 2) {
    info {
      count
    }
    results {
      name
      species
      image
    }
  }
}


### Deliverables
- A simple React app that uses Apollo Client to fetch and display users from the
GraphQL API.
- Proper TypeScript types for the GraphQL query response and variables.

### Documentation
Please provide a README file with clear instructions on how to set up and run your project,
as well as any other information that will help us understand your code.

### Submission
Please submit your code as a ZIP file or a link to a GitHub repository. In the second interview
stage with a team lead and software engineer, be prepared to present your solution and
discuss your design choices.