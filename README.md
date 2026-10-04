# Atelier Store

Next.js (App Router) + TypeScript + Tailwind CSS + Better Auth + Drizzle ORM + PostgreSQL.

## Setup

```bash
npm install
cp .env.example .env.local   # fill in DATABASE_URL and BETTER_AUTH_SECRET
npm run auth:generate        # writes Better Auth tables to src/db/schema/auth.ts
                             # then uncomment the re-export in src/db/schema/index.ts
npm run db:generate && npm run db:migrate
npm run dev
```

Better Auth validates the Drizzle schema on startup, so the auth routes stay unavailable until the auth tables are generated and migrated.

## Structure

```
src/
  app/api/auth/[...all]/route.ts  Better Auth route handler
  db/index.ts                     Drizzle client (node-postgres pool)
  db/schema/index.ts              Drizzle schema barrel
  lib/auth/index.ts               Better Auth server instance
  lib/auth/client.ts              Better Auth React client
  lib/env.ts                      Required env vars (fails fast if missing)
drizzle.config.ts                 drizzle-kit config (migrations in ./drizzle)
```

## Scripts

| Script                  | Description                              |
| ----------------------- | ---------------------------------------- |
| `npm run dev`           | Start the dev server                     |
| `npm run build`         | Production build (requires env vars)     |
| `npm run typecheck`     | Type-check with `tsc`                    |
| `npm run lint`          | ESLint                                   |
| `npm run auth:generate` | Generate the Better Auth Drizzle schema   |
| `npm run db:generate`   | Generate SQL migrations from the schema   |
| `npm run db:migrate`    | Apply migrations                         |
| `npm run db:push`       | Push the schema directly (prototyping)   |
| `npm run db:studio`     | Open Drizzle Studio                      |
