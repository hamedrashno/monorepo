# Independent deployment

The two applications can be built and deployed independently with Node.js and pnpm.

## Web

`apps/web` produces static files in `apps/web/dist`. Upload that directory to any static host.

For a deployed API on another origin, create `apps/web/.env.production.local` before building:

```bash
VITE_API_BASE_URL=https://api.example.com/api/v1
```

Then run `pnpm build:web` and upload `apps/web/dist`.

## API

Install dependencies, build the API, and start its compiled entry point:

```bash
pnpm install --frozen-lockfile
pnpm build:api
node apps/api/dist/main.js
```

Set `PORT` and `CORS_ORIGIN` through environment variables. For example, set `CORS_ORIGIN` to the URL where the web app is hosted.

The `@catalog/contracts` package is built first by Turbo and is a compile-time dependency of both apps. It is not a runtime dependency of either deployment.
