# Portfolio Backend

A small Express server I built to learn backend basics — serves data as a real API backed by a MySQL database.

## Routes

- `GET /` — health check, confirms the server is running
- `GET /api/devlog` — returns all devlog entries from the database
- `POST /api/devlog` — adds a new devlog entry (needs `day`, `title`, `detail` in the JSON body)

## Setting it up

1. Open MySQL Workbench, connect to your local server, and run `schema.sql` to create the database, table, and seed data.
2. Copy `.env.example` to a new file called `.env`, and fill in your real MySQL password.
3. Install dependencies:
   ```
   npm install express cors mysql2 dotenv
   ```
4. Run it:
   ```
   node index.js
   ```
5. Visit `http://localhost:3000` and `http://localhost:3000/api/devlog`.

**Note:** `.env` contains a real password and is excluded from Git via `.gitignore` — never commit it.

## Roadmap

- [x] Basic Express server with a couple of routes
- [x] Connect a real database (MySQL)
- [ ] Have the frontend fetch from this API instead of its own hardcoded devlog
- [ ] Deploy so it's live on the internet (Render/Railway)
