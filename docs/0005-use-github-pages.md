# ADR-0005: Use GitHub Pages for Deployment

## Status
Accepted

## Context
We need to deploy the React app and Storybook to a publicly accessible URL with automated deployments.

## Decision
Use GitHub Pages with GitHub Actions for automated deployment. The main app is deployed at `/rick-and-morty-characters-demo/` and Storybook at `/rick-and-morty-characters-demo/storybook/`.

Base paths are configured via `VITE_BASE_PATH` environment variable:
- Production: `/rick-and-morty-characters-demo/` (set in GitHub Actions)
- Local: `/` (default for localhost)

A `.nojekyll` file is included to prevent Jekyll from processing static assets.

## Consequences
### Positive
- Free for public repositories
- Automatic deployment on push to main
- Integrated with GitHub

### Negative
- Only works for static sites
- Base path configuration adds some complexity

## Alternatives Considered
1. **Vercel/Netlify** - External services, require account setup
2. **GitHub Pages with Jekyll** - Causes issues with modern build tools
3. **GitHub Pages with GitHub Actions** - Selected for simplicity and integration

