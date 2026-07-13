# Furqan Atiq — Portfolio

React (Vite) + Tailwind CSS + Framer Motion, deployed on Vercel. The contact
form is handled by a Vercel serverless function (`client/api/contact.js`) that
sends submissions via SMTP email — there's no separate backend to run.

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

```bash
cd client
npm install
npm run dev
```

Runs on `http://localhost:5173`. The frontend loads fine this way, but plain
`vite dev` doesn't run the `/api` serverless function — the contact form needs
the Vercel dev server for that instead:

```bash
cd client
npx vercel dev
```

This runs the Vite app and `api/contact.js` together, matching production.

### Build for production

```bash
cd client
npm run build
```

Outputs static files to `client/dist`.

## Deploying

Deployed on Vercel with the project root set to `client/`. Production requires
these environment variables (`vercel env add <NAME> production`):

- `SMTP_USER` — sending account (e.g. a Gmail address)
- `SMTP_PASS` — an app password for that account, not the real login password
- `RECIPIENT_EMAIL` — where contact form submissions get delivered
- `SMTP_HOST` / `SMTP_PORT` — optional, default to Gmail (`smtp.gmail.com:587`)

## Updating content

All resume-style content (name, summary, skills, experience, projects) lives in
one place: `client/src/data/portfolioData.js`. Edit that file and every section
of the site updates automatically.

## Replacing the photo

Swap `client/src/assets/profile.png` with a new image of the same rough aspect
ratio (4:5, portrait) — the layout and framing will adjust automatically.
