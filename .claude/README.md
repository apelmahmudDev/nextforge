# Claude Code Configuration

`CLAUDE.md` contains the project-wide Claude Code instructions. This folder contains reusable Claude-specific capabilities:

- `agents/reviewer.md`: focused code-review subagent
- `commands/review.md`: run a working-tree review with `/review`

Add new domain-specific agents under `agents/` and repeatable workflows under `commands/`. Keep repository-wide engineering rules in `AGENTS.md` first, then update `CLAUDE.md` only when Claude-specific behavior is needed.

Do not commit credentials or personal permission settings here. Keep AI actions read-only by default and require approval for edits, commands, network requests, or other side effects.
