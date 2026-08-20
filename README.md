# Samuel Pino Portfolio

A production-ready personal portfolio for Samuel Pino, built for entry-level and junior Software Engineer, Full-Stack Developer, Backend Developer, and related technology roles.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Vercel

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm run type-check
npm run build
```

## Content

Most portfolio content lives in `src/data/portfolio.ts`.

Edit that file to update:

- personal profile details
- social links
- resume path
- navigation
- projects
- skills
- experience
- education

Type definitions live in `src/types/portfolio.ts`.

## Projects

Add or edit projects in the `projects` array in `src/data/portfolio.ts`. Each project supports:

- overview copy
- technologies
- links
- screenshots
- features
- engineering highlights
- challenges
- architecture notes
- case-study sections

Each project automatically gets a route at `/projects/[slug]`.

## Screenshots

Project screenshot placeholders are defined in `src/data/portfolio.ts`.

When real screenshots are ready:

1. Add image files under `public/images/projects/`.
2. Add the `src` field to each screenshot object.
3. Update the placeholder labels or remove them once real assets are wired.

## Resume

The current resume file is stored at:

`public/resume/Samuel-Pino-Software-Engineer-Resume.pdf`

To replace it, add the new PDF at the same path or update `profile.resumePath` in `src/data/portfolio.ts`.

## Deployment

This repository is configured for Vercel. The expected production flow is:

```bash
npm run lint
npm run type-check
npm run build
vercel link
vercel deploy --prod
```

The `vercel.json` file sets the framework, install command, and build command for Vercel.

Set `NEXT_PUBLIC_SITE_URL` in Vercel if you want a custom canonical domain before or after adding a custom domain. Vercel system environment variables can also provide the production URL during deployment.

## Known Placeholders

Search for `TODO_REPLACE` to find remaining content or asset placeholders:

- `TODO_REPLACE_PORTFOLIO_DOMAIN_AFTER_DEPLOY`
- `TODO_REPLACE_AI_MULTI_DESKTOP_SCREENSHOT`
- `TODO_REPLACE_AI_MULTI_MOBILE_SCREENSHOT`
- `TODO_REPLACE_MULTI_ANDROID_PHONE_SCREENSHOTS`
- `TODO_REPLACE_MULTI_ANDROID_APK_OR_PLAY_STORE_LINK`
- `TODO_REPLACE_GEEK_TEXT_LIVE_DEMO_URL`
- `TODO_REPLACE_GEEK_TEXT_API_SCREENSHOT`
