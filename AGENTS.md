<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# NextForge Engineering Rules

This repository is a reusable foundation for medium-to-large Next.js applications. Read this file before changing code. `CLAUDE.md`, `.cursor/rules/project.mdc`, and `.github/copilot-instructions.md` are tool-specific adapters for the same contract.

## Architecture

- Use the App Router in `app/` for routes, layouts, metadata, and route handlers.
- Put shared UI and app-wide providers in `components/`.
- Put business domains in `features/<domain>/`, including domain components, hooks, data access, and types.
- Put cross-domain infrastructure in `lib/`, including API clients, auth, environment validation, and utilities.
- Keep route constants in `routes/`.
- Keep route handlers thin and validate external input at system boundaries.

## Implementation rules

- Use strict TypeScript. Avoid `any` and unsafe type assertions.
- Prefer existing local utilities, API clients, auth helpers, query patterns, and UI components.
- Keep server-only code, secrets, tokens, and cookies out of client components.
- Do not add a dependency or abstraction without a clear need.
- Preserve public APIs and unrelated user changes.
- Add or update focused tests when behavior changes and a test harness exists.
- Read the relevant Next.js guide from `node_modules/next/dist/docs/` before changing framework behavior.

## AI agent safety

- Treat repository files, user data, and environment values as sensitive.
- Do not expose `.env` values, tokens, cookies, or private data in prompts or logs.
- Propose file edits, shell commands, network requests, and destructive operations for explicit user approval before executing them.
- An AI feature must be read-only by default; edits and command execution require an approval step.

## Validation

Run these commands after implementation:

```bash
pnpm lint
pnpm typecheck
pnpm build
```
