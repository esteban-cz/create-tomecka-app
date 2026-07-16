# Create Tomecka App

A simple Next.js boilerplate with TypeScript, Tailwind CSS, shadcn/ui, and a
small set of reusable layout components and utilities.

## Getting started

Install the dependencies:

```bash
npm install
```

Create your local environment file:

```bash
cp .env.example .env.local
```

Update the values in `.env.local`, then start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## npm scripts

| Command             | Description                                                                        |
| ------------------- | ---------------------------------------------------------------------------------- |
| `npm run pre`       | Formats the project, runs ESLint, and checks TypeScript without generating output. |
| `npm run dev`       | Starts the Next.js development server with hot reloading.                          |
| `npm run build`     | Creates an optimized production build.                                             |
| `npm run start`     | Starts the production server. Run `npm run build` first.                           |
| `npm run lint`      | Checks the project with ESLint.                                                    |
| `npm run check`     | Runs ESLint and the TypeScript checker without changing files.                     |
| `npm run format`    | Formats all supported project files with Prettier.                                 |
| `npm run typecheck` | Checks TypeScript types without emitting compiled files.                           |

## Optional additions

The following modules can be added when a project needs them. Run each command
from the project root and review the files and dependencies added by the shadcn
CLI.

> [!WARNING]
> These registry URLs contain a token. Before publishing this README or making
> the repository public, verify that the token is intended to be shared.

### Database connection

Adds the database connection setup:

```bash
npx shadcn@latest add "https://addcn.dev/r/estyxq/db.json?token=jx7b52hezdxrg1ejtxe85fnhnd8anvc2"
```

### Robots and sitemap

Adds `robots.ts` and `sitemap.ts`:

```bash
npx shadcn@latest add "https://addcn.dev/r/estyxq/robots-sitemap.json?token=jx7b52hezdxrg1ejtxe85fnhnd8anvc2"
```

### Better Auth

Adds the Better Auth setup:

```bash
npx shadcn@latest add "https://addcn.dev/r/estyxq/better-auth.json?token=jx7b52hezdxrg1ejtxe85fnhnd8anvc2"
```

### Mail

Adds `mail.ts` and the mail setup:

```bash
npx shadcn@latest add "https://addcn.dev/r/estyxq/mail.json?token=jx7b52hezdxrg1ejtxe85fnhnd8anvc2"
```

### Progressive Web App

Adds the PWA setup:

```bash
npx shadcn@latest add "https://addcn.dev/r/estyxq/pwa.json?token=jx7b52hezdxrg1ejtxe85fnhnd8anvc2"
```

## Before committing

Run the full project check:

```bash
npm run check
```

To format the project and run all checks together:

```bash
npm run pre
```
