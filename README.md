# Portfolio Backend

A small Express server I built to learn backend basics — serves data as a real API instead of hardcoding it into the frontend.

## Routes

- `GET /` — health check, confirms the server is running
- `GET /api/devlog` — returns my devlog entries as JSON

## Running it locally

```
npm install
node index.js
```

Then visit `http://localhost:3000` and `http://localhost:3000/api/devlog`.

## Roadmap

- [x] Basic Express server with a couple of routes
- [ ] Connect a database instead of hardcoded data
- [ ] Have the frontend fetch from this API instead of its own hardcoded devlog
- [ ] Deploy so it's live on the internet (Render/Railway)
