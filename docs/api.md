# API notes

The API uses URI versioning and is available under `/api/v1`. Swagger is served at `/api/docs` while running.

Every successful endpoint uses `{ "success": true, "data": ... }`; errors use `{ "success": false, "error": { "statusCode", "message", "timestamp", "path" } }`.

| Method | Path                   | Description                            |
| ------ | ---------------------- | -------------------------------------- |
| GET    | `/api/v1/health`       | Liveness response                      |
| GET    | `/api/v1/products`     | List products; optional `search` query |
| GET    | `/api/v1/products/:id` | Read a product                         |
| POST   | `/api/v1/products`     | Create an in-memory product            |
| GET    | `/api/v1/users`        | List sample users                      |
