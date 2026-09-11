# NextForge

> A production-minded frontend foundation for teams building a separate web application around an existing or future backend.

NextForge gives a new product a clear structure before the codebase becomes difficult to change. It is intentionally frontend-focused: connect it to any backend, keep domain code organized, and scale without introducing monorepo overhead on day one.

## Why NextForge?

- **Separate frontend by design**: keep the web application independent from your API or backend service.
- **Typed boundaries**: validate environment values and external input with TypeScript and Zod.
- **Domain-led architecture**: organize business code under `features/<domain>/`.
- **Production-ready foundations**: authentication hooks, API clients, query caching, PWA registration, and shared UI primitives are already in place.
- **Developer workflow included**: ESLint, Prettier, Husky, lint-staged, and repository-level AI instructions.

## Technology

| Area           | Included                                                 |
| -------------- | -------------------------------------------------------- |
| Framework      | Next.js 16, App Router, React 19                         |
| Language       | TypeScript with strict checking                          |
| Styling        | Tailwind CSS 4, shadcn/ui, Base UI                       |
| Server state   | TanStack Query and Query Devtools                        |
| Forms          | TanStack Form                                            |
| Validation     | Zod and `@t3-oss/env-nextjs`                             |
| Authentication | Server session helpers and auth hooks                    |
| PWA            | Service worker registration and web app manifest         |
| Quality        | ESLint, Prettier, Husky, lint-staged                     |
| AI workflow    | Shared instructions for Copilot, Claude Code, and Cursor |

## Architecture

```text
app/                  Routes, layouts, metadata, and route handlers
components/           Shared UI and application providers
components/ui/        Reusable interface primitives
features/<domain>/    Domain components, hooks, data, and types
lib/                  API, auth, env, query, and shared infrastructure
routes/               Centralized route constants
public/               Static assets and service worker
```

### Ownership rules

- Put routes, layouts, metadata, and thin route handlers in `app/`.
- Put reusable UI and providers in `components/`.
- Create a folder under `features/` for every business domain.
- Keep API clients, auth, environment validation, and query utilities in `lib/`.
- Keep secrets, cookies, tokens, and server-only code out of client components.
- Validate external input at system boundaries and keep route handlers orchestration-focused.

## Get started

### Requirements

- Node.js 20+
- pnpm
- A running backend API

### Install

```powershell
git clone https://github.com/apelmahmudDev/nextforge my-frontend
cd my-frontend
pnpm install
Copy-Item .env.example .env.local
```

Set the backend URL in `.env.local`:

```env
API_BASE_URL=http://localhost:4000
```

Start the development server:

```powershell
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project commands

```bash
pnpm dev         # Start the development server
pnpm lint        # Run ESLint
pnpm typecheck   # Run TypeScript without emitting files
pnpm build       # Create a production build
pnpm start       # Start the production server
pnpm format      # Format TypeScript and TSX files
```

Before opening a pull request, run:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Choosing a project shape

NextForge is the right starting point when you need a **separate frontend**. It is not intended to be a full-stack framework or a monorepo generator.

- **Separate frontend**: use [NextForge](https://github.com/apelmahmudDev/nextforge) and connect it to your backend.
- **Full-stack application**: consider [create.t3.gg](https://create.t3.gg/) for a type-safe T3 Stack project.
- **Monorepo with web, server, and mobile apps**: consider [Better-T-Stack](https://www.better-t-stack.dev/), a modern CLI for scaffolding end-to-end type-safe TypeScript projects such as `apps/web`, `apps/server`, and `apps/mobile`.

## Adding UI components

Use the existing shadcn/ui setup when adding shared primitives:

```bash
pnpm dlx shadcn@latest add button
```

Import components through the `@/` alias:

```tsx
import { Button } from "@/components/ui/button"
```

## AI-assisted development

The repository maintains one engineering contract in [`AGENTS.md`](AGENTS.md), with tool-specific adapters for:

- [`CLAUDE.md`](CLAUDE.md) for Claude Code
- `.claude/` for Claude-specific agents and commands
- `.cursor/rules/project.mdc` for Cursor
- [`.github/copilot-instructions.md`](.github/copilot-instructions.md) for GitHub Copilot

These instructions cover architecture, security boundaries, validation, and safe development practices. Update `AGENTS.md` first when a project-wide rule changes, then update adapters only when necessary.

AI-assisted changes should follow the same engineering rules as human changes:

1. Inspect the owning module before editing.
2. Keep changes focused and preserve unrelated work.
3. Keep secrets and private data out of prompts and logs.
4. Ask for approval before file edits, shell commands, network access, or other side effects when operating inside an AI feature.
5. Run lint, typecheck, and build before considering a change complete.

## Scaling guidance

- Keep API access typed and centralized through the existing API clients.
- Keep authentication and authorization checks close to server boundaries.
- Add domain-specific query keys and functions under the owning feature.
- Add observability, error reporting, and a test runner before the first production deployment.
- Keep this repository as a focused frontend. Move to a full-stack or monorepo starter when the project shape requires it.

## License

This project is private and intended to be used as an application starter. Add a project license before publishing a derived application publicly.
