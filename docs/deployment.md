# Independent deployment

`apps/web` produces static files in `apps/web/dist` and can be deployed to any static host or through its Nginx Docker image.

`apps/api` produces a Node.js service in `apps/api/dist` and can be deployed as a container or run with `node dist/main.js`. Set `PORT` and `CORS_ORIGIN` through environment variables.

The `@catalog/contracts` package is built first by Turbo and is a compile-time dependency of both apps. It is not a runtime dependency of either deployment.
