# Minimal Astro Theme

A minimal, beginner-friendly blog template built with [Astro](https://astro.build). One centered column, system fonts, zero client-side JavaScript, and markdown posts.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:4321 — that's your site.

## Make it yours

1. **Edit [`src/consts.js`](src/consts.js)** — set your site title, description, and footer links. This is the only file you need to change.
2. **Edit `site` in [`astro.config.mjs`](astro.config.mjs)** — set your deployed URL (used by the RSS feed and sitemap).
3. **Read the "Hello, world" post** on the running site — it's a built-in tutorial for the theme and a reference for every markdown feature. Delete the sample posts in `src/content/blog/` when you're ready to write your own.

## Options

All in [`src/consts.js`](src/consts.js):

| Setting | Default | What it does |
| --- | --- | --- |
| `DATE_LOCALE` | `'en-US'` | Date format: `'en-US'` → "August 1, 2026", `'en-GB'` → "1 August 2026" |
| `SHOW_READING_TIME` | `true` | Show "3 min read" next to each post's date |
| `SHOW_EXCERPTS` | `true` | Show a short summary under each title on the homepage |
| `SOCIAL_IMAGE` | `'/og-image.png'` | Default image for X / social link previews |

## Writing posts

Create a markdown file in `src/content/blog/`. The filename becomes the URL (`my-post.md` → `/blog/my-post/`):

```markdown
---
title: My first post
date: 2026-08-17
---

Post content goes here, in markdown.
```

Optional frontmatter:

| Field | What it does |
| --- | --- |
| `draft: true` | Hides the post from the site entirely |
| `description: ...` | Text for X/social link previews (defaults to the first paragraph) |
| `image: /file.png` | Preview image for X/social cards, a file in `public/` (defaults to `og-image.png`) |
| `imageAlt: ...` | Alt text for that image (defaults to the post title) |

## Project structure

```
src/
├── consts.js              # your name, title, footer links — edit this first
├── content.config.ts      # frontmatter schema for posts
├── content/blog/          # your posts live here (markdown)
├── styles/global.css      # the entire design, one small CSS file
├── layouts/
│   └── BaseLayout.astro   # <head>, page column, footer
├── components/
│   └── PostList.astro     # the date + title list on the homepage
└── pages/
    ├── index.astro        # homepage
    ├── blog/[slug].astro  # renders each post
    ├── rss.xml.js         # RSS feed at /rss.xml
    └── 404.astro          # not-found page
```

## Commands

| Command | Action |
| --- | --- |
| `npm run dev` | Start the dev server at `localhost:4321` |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the built site locally |

## Deploy

The build output in `dist/` is plain static files — host it anywhere. Netlify, Vercel, Cloudflare Pages, and GitHub Pages all auto-detect Astro; connect your repo and use the defaults (`npm run build`, publish directory `dist`). See [Astro's deployment guides](https://docs.astro.build/en/guides/deploy/) for step-by-step instructions.
