# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Stack

Next.js 16 (App Router, `src/app`) + React 19 + TypeScript (strict) + Tailwind CSS v4 + Better Auth + Drizzle ORM on PostgreSQL (`pg` pool). Import alias `@/*` → `src/*`.

Next.js 16 differs from older versions (e.g. typed `LayoutProps<"/">` / `PageProps` globals are used instead of hand-written prop types). Check `node_modules/next/dist/docs/` before using an unfamiliar API.

## Commands

```bash
npm run dev          # dev server (http://localhost:3000)
npm run build        # production build — needs env vars set
npm run typecheck    # tsc --noEmit
npm run lint         # eslint (flat config, eslint-config-next)

npm run auth:generate  # Better Auth CLI → writes src/db/schema/auth.ts
npm run db:generate    # drizzle-kit: SQL migrations from schema → ./drizzle
npm run db:migrate     # apply migrations
npm run db:push        # push schema directly (prototyping only)
npm run db:studio      # Drizzle Studio
```

There is no test framework configured yet.

## Environment

`src/lib/env.ts` reads `DATABASE_URL`, `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL` and throws at import time if any is missing — so anything that imports `@/db` or `@/lib/auth` (including `next build`) fails without them. Copy `.env.example` to `.env.local`. `drizzle.config.ts` loads `.env.local` then `.env` via dotenv.

## Architecture

- **DB** — `src/db/index.ts` exports a single `db` (Drizzle over a `pg` Pool cached on `globalThis` to survive dev hot reloads). All tables are exported from the barrel `src/db/schema/index.ts`; drizzle-kit reads the whole `src/db/schema` directory. Add new table files there and re-export them from the barrel.
- **Auth** — `src/lib/auth/index.ts` is the server-side Better Auth instance, wired to Drizzle via `drizzleAdapter(db, { provider: "pg", schema })`. `nextCookies()` must remain the **last** plugin. `src/lib/auth/client.ts` is the React client (`authClient`) for client components. All auth endpoints are served by the catch-all `src/app/api/auth/[...all]/route.ts`.
- **Auth schema bootstrap** — Better Auth tables are generated, not hand-written: run `npm run auth:generate`, then uncomment `export * from "./auth"` in `src/db/schema/index.ts`, then `db:generate` + `db:migrate`. Better Auth validates the schema on startup, so auth routes don't work until this is done. Re-run `auth:generate` after adding Better Auth plugins that need tables.

## Design system

Tailwind v4, CSS-first (no `tailwind.config`). `src/app/globals.css` only imports `src/styles/`:

- `theme.css` — `@theme` tokens. The default color, radius and shadow scales are reset to `initial`, so only the monochrome palette exists (`text-muted`, `bg-surface`, `border-border`, …) and corners are square. Breakpoints: md 768, lg 1024, xl 1440. Responsive layout tokens are exposed as `px-gutter`, `py-section`, `h-header`.
- `base.css` — the per-breakpoint `--gutter` / `--section-space` / `--header-height` values and element defaults.
- `primitives.css` — `@utility` classes: type presets (`type-display` … `type-micro`, `wordmark`, `price`), containers (`container-page|narrow|prose`, `bleed`, `section`), buttons (`btn` + `btn-primary|outline|light|outline-light`, `btn-sm`, `btn-block`, `btn-icon`), links (`link`, `link-quiet`, `link-nav` with `aria-current`), `divider`, and layout primitives (`nav-bar`, `product-grid`, `split`, `scroll-row`, `media`, `hero`, `scrim`). Modifiers change the base class through custom properties (e.g. `--btn-height`), never the same property, so class order doesn't matter. Keep to that pattern when adding variants.
