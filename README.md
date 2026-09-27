# Catalog Monorepo

A production-oriented pnpm workspace containing an independently deployable Vue frontend and NestJS API. The API exposes in-memory sample Products and Users; no database is required.

## Requirements

- Node.js 24+
- pnpm 10+
- Docker Desktop (optional, for containers)

## Quick start

```bash
pnpm install
pnpm dev
```

Open `http://localhost:5173`. The Vite development server proxies `/api` to the API at `http://localhost:3000`.

## Workspace commands

| Command                                 | Purpose                               |
| --------------------------------------- | ------------------------------------- |
| `pnpm dev:web`                          | Run only the Vue app                  |
| `pnpm dev:api`                          | Run only the Nest API                 |
| `pnpm build:web` / `pnpm build:api`     | Build either deployable independently |
| `pnpm lint`, `pnpm typecheck`           | Quality checks across the workspace   |
| `pnpm package:web` / `pnpm package:api` | Produce an individual package archive |

## Docker deployment

```bash
docker compose up --build
```

The web app is served at `http://localhost:8080`; Nginx proxies `/api` to the API container. Each app has its own Dockerfile, so either can be built and published separately:

```bash
docker build -f apps/web/Dockerfile -t your-registry/catalog-web:latest .
docker build -f apps/api/Dockerfile -t your-registry/catalog-api:latest .
docker push your-registry/catalog-web:latest
docker push your-registry/catalog-api:latest
```

## Layout

- `apps/web` — Vue 3/Vite client
- `apps/api` — NestJS REST API
- `packages/contracts` — shared compile-time DTO/type contracts
- `packages/eslint-config` and `packages/typescript-config` — shared tooling
- `docs` — API and deployment notes
