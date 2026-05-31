# CodeAlpha Social Media Platform (Mini)

A mini social media platform project with:
- Register / Login / Logout
- Create posts
- Edit/Delete your own posts
- Like/Unlike posts
- Comment on posts
- Persistent storage using `data.json` (so data remains after server restart)

## Tech Stack
- Frontend: HTML + CSS (served from Express)
- Backend: Node.js + Express
- Storage: JSON file (`data.json`)

## Requirements
- Node.js (v18+ recommended)
- npm

## Setup & Run
1. Install dependencies:
```bash
npm install
```

2. Start server:
```bash
node server.js
```

3. Open in browser:
- http://localhost:5000

> Note: This project is designed to be served by Express on port 5000.  
> If you open `public/index.html` directly using Live Server (5500), the UI may not work unless the backend is running and API calls succeed.

## API Endpoints (summary)
- `POST /api/register` { username, password }
- `POST /api/login` { username, password }
- `POST /api/logout` (auth required)
- `GET /api/posts`
- `POST /api/posts` (auth required)
- `PATCH /api/posts/:id` (auth required, owner only)
- `DELETE /api/posts/:id` (auth required, owner only)
- `POST /api/posts/:id/like` (auth required)
- `POST /api/posts/:id/comment` (auth required)

## Data Storage
All data is stored in `data.json`:
- users
- sessions (tokens)
- posts (likes + comments)

## Project Notes
This is a mini project intended for learning purposes (CodeAlpha).  
For a production-grade platform, use a real database (SQLite/Postgres) + JWT + validation.
