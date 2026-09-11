# NextForge

NextForge is a production-oriented Next.js starter for medium-to-large applications. It provides a strict TypeScript base, App Router structure, server/client API boundaries, authentication hooks, TanStack Query, shadcn/ui, PWA registration, and shared AI-agent instructions.

## Quick start

Requirements: Node.js 20+, pnpm, and a running backend API.

```powershell
pnpm install
Copy-Item .env.example .env.local
pnpm dev
```

Set `API_BASE_URL` in `.env.local`. Environment variables are validated when the server starts.

Useful checks:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Project structure

```text
app/                 Routes, layouts, metadata, and route handlers
components/          Shared UI and application providers
features/<domain>/    Domain components, hooks, data, and types
lib/                  API, auth, env, query, and shared infrastructure
routes/               Centralized route constants
public/               Static assets and service worker
```

For a new business domain, create `features/<domain>/` first. Keep reusable infrastructure in `lib/` and avoid putting domain logic directly in shared components.

## AI-assisted development

The repository keeps one engineering contract in `AGENTS.md`, with adapters for common coding agents:

- `CLAUDE.md` for Claude Code
- `.claude/` for Claude-specific agents and reusable commands
- `.cursor/rules/project.mdc` for Cursor
- `.github/copilot-instructions.md` for GitHub Copilot

These files cover architecture, security boundaries, validation, and approval requirements. Update `AGENTS.md` first when project-wide conventions change, then mirror only the necessary changes in the adapters.

AI features added inside the product should be server-side, read-only by default, and require explicit approval before file edits, shell commands, network access, or other side effects. Never send environment values, credentials, cookies, or private user data to a model.

## Adding components

```bash
pnpm dlx shadcn@latest add button
```

Import shared UI components with the `@/` alias:

```tsx
import { Button } from "@/components/ui/button"
```

## Scaling guidance

- Keep API access typed and centralized through the existing API clients.
- Keep authentication and authorization checks close to server boundaries.
- Add domain-specific query keys and functions under the owning feature or `lib` module.
- Keep route handlers orchestration-focused; move business rules into testable modules.
- Add observability, error reporting, and a test runner before the first production deployment.
