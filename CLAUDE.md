# NextForge Project Rules

Read `AGENTS.md` before making changes. It is the source of truth for repository conventions.

## Working agreement

- Inspect the owning module before editing.
- Keep changes focused and preserve existing public APIs unless the task requires a contract change.
- Use TypeScript with strict types. Avoid `any` and unsafe type assertions.
- Keep secrets and server-only code out of client components.
- Prefer existing utilities, API clients, route helpers, and UI components.
- Add or update focused tests when behavior changes.
- Run `pnpm lint`, `pnpm typecheck`, and `pnpm build` before considering a change complete.

## Architecture

- `app/`: routes, layouts, metadata, and route handlers.
- `components/`: shared UI and app-wide providers.
- `features/<domain>/`: domain components, hooks, data access, and types.
- `lib/`: cross-domain infrastructure such as API clients, auth, environment validation, and utilities.
- `routes/`: centralized route constants.

For new business domains, create a feature folder instead of placing domain logic in `components/` or `lib/`.

## Safety

Never modify files, run shell commands, or make network requests from an AI feature without explicit user approval. Never include `.env` values, tokens, cookies, or private user data in prompts or logs.
