# NextForge Copilot Instructions

`AGENTS.md` is the canonical repository guide. Read it before making changes.

- Follow the existing Next.js App Router and strict TypeScript conventions.
- Organize business domains under `features/<domain>/`.
- Keep shared infrastructure in `lib/` and shared UI in `components/`.
- Keep server-only code, environment variables, tokens, and cookies out of client components.
- Prefer existing API, auth, query, routing, and UI patterns.
- Keep route handlers thin and validate external input at boundaries.
- Do not add dependencies without a clear need.
- Keep edits scoped and preserve unrelated user changes.
- Run `pnpm lint`, `pnpm typecheck`, and `pnpm build` after implementation.
- Propose destructive operations, shell commands, file edits, and network access for user approval first.
