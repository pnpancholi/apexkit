# AGENTS.md

Apexkit is a NextJS based starter-kit to bootstrap web applications faster while keeping strong defaults and avoid vendor locking.

## Stack
- Framework: Next JS, with App Router
- Language: TypeScript (strict with avoiding unnneccesary TS nosie)
- Styling: TailwindCSS and DaisyUI
- Data: Drizzle ORM, stick to Drizzle to maintain migrations and make it easy to switch DB providers.
- Authentication: BetterAuth
- Package Manager: Works with pnpm, bun and npm. Prefer pnpm over others. But do not mix tooling and commit lockfiles from more than ones.

## Commands
- pnpm dev - Run a dev server
- pnpm build - Build for production
- pnpm start - Run the production build
- pnpm lint - Run Biome linter to find code quality issues.
- pnpm db:gen - Generate migration file for DB changes.
- pnpm db: migrate - Push the clean migration to your db.

## Communications
- Keep responses short and concise. Lead with the result, not the process.
- Use a formal, professional tone. No filler, small talk, or emojis.
- Summarize changes in a few bullets: what changed, which files, and why.
- State blockers or assumptions explicitly; ask one focused question if input is needed.

## Skills
If a skill matches the task, read it before starting and follow it exactly.

- Writing/editing HTML or JSX: [skills/daisyui](.agents/skills/daisyui/SKILL.md)
- Adding a UI primitive: [skills/clean-component](.agents/skills/clean-component/SKILL.md)

