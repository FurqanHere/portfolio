# Furqan Atiq — Portfolio

A two-part project:

- `client/` — React (Vite) + Tailwind CSS + Framer Motion frontend
- `server/` — Node.js + Express backend for the contact form

## Design direction

Dark ink-navy canvas with a brass accent, a serif display face (Fraunces) paired
with Inter and a monospace utility face (JetBrains Mono) for labels/tags — a nod
to the client-facing, slightly formal world of the shipped projects (legal,
marine/luxury rental, hospitality, marketplace platforms). Each project card
carries its own accent color for its industry. The signature interaction is the
mouse-tilt on project cards and the staggered "floating tech tags" around the
hero portrait.

## Running locally

You'll need Node.js 18+ installed.

### 1. Start the backend

```bash
cd server
npm install
npm run dev
```

Runs on `http://localhost:4000`. Contact form submissions are saved to
`server/data/messages.json`.

### 2. Start the frontend

In a second terminal:

```bash
cd client
npm install
npm run dev
```

Runs on `http://localhost:5173` and proxies `/api` requests to the backend.

### 3. Build for production

```bash
cd client
npm run build
```

Outputs static files to `client/dist`, which you can deploy to any static host
(Vercel, Netlify, etc.), with the `server/` folder deployed separately (Render,
Railway, a VPS, etc.) — just point the frontend's API calls at your deployed
backend URL instead of the local proxy.

## Wiring up real email delivery

Right now `/api/contact` just saves messages to a JSON file so nothing is lost.
To also send yourself an email, install `nodemailer` in `server/` and send from
inside the `app.post("/api/contact", ...)` handler in `server.js`, using your
own SMTP or provider (Gmail app password, SendGrid, Resend, etc.). Keep real
credentials in a `.env` file — never commit them.

## Updating content

All resume-style content (name, summary, skills, experience, projects) lives in
one place: `client/src/data/portfolioData.js`. Edit that file and every section
of the site updates automatically.

## Replacing the photo

Swap `client/src/assets/profile.jpg` with a new image of the same rough aspect
ratio (4:5, portrait) — the layout and framing will adjust automatically.
