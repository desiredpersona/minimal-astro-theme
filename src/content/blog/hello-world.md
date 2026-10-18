---
title: Hello, world
date: 2026-08-01
---

Welcome to your new blog. This post is two things at once: a short tutorial on using this theme, and a reference showing every markdown feature the theme knows how to render. Keep it around while you're learning, then delete it.

## Part 1: Using this theme

### Start the dev server

Open a terminal in the project folder and run:

```bash
npm install
npm run dev
```

Then open [http://localhost:4321](http://localhost:4321). The site rebuilds instantly whenever you save a file.

When you're ready to publish, `npm run build` writes the finished site to the `dist/` folder as plain HTML, and `npm run preview` lets you check that output locally.

### Make it yours

All the personal details live in one file, `src/consts.js`:

```js
export const SITE_TITLE = 'Minimal Astro Theme';
export const SITE_DESCRIPTION = 'A minimal blog built with Astro.';

export const X_HANDLE = '@yourhandle';
export const X_URL = 'https://x.com/yourhandle';
```

Change the title, description, and footer handle to your own. Setting `X_URL` to an empty string (`''`) hides the footer link entirely.

One more setting lives in `astro.config.mjs`: set `site` to your deployed URL so the RSS feed and sitemap use the right address.

### Switch between US and UK dates

Dates on the homepage and on each post are formatted by a single setting in `src/consts.js`:

```js
export const DATE_LOCALE = 'en-US';
```

| Value     | Renders as       |
| --------- | ---------------- |
| `'en-US'` | August 1, 2026   |
| `'en-GB'` | 1 August 2026    |

Any other locale code works too, for example `'de-DE'` gives "1. August 2026". The date at the top of this post follows whatever you choose.

### Write a post

Every markdown file in `src/content/blog/` becomes a post, and the filename becomes the URL. The full steps are in [How to add a post](/blog/how-to-add-a-post/). The one trick worth knowing right away: add `draft: true` to a post's frontmatter and it disappears from the site until you remove it.

### Change the look

The entire design is one small file, `src/styles/global.css`. The colours are variables at the top of that file, so most changes are one line:

```css
:root {
  --text: #000000;
  --muted: #737373;
  --line: #e5e5e5;
  --code-bg: #f5f5f5;
  --link: #0e65f3;
}
```

Links inside posts are blue and always underlined, so they're easy to spot on a phone where there's no hover. When you point at one, it turns a darker blue. Change `--link` to recolour them everywhere at once.

If you change a text colour, keep it dark enough to read: check it against white with a free contrast checker and aim for at least 4.5:1. All the theme's text colours meet that.

Code blocks are coloured by a syntax theme set in `astro.config.mjs` under `shikiConfig.theme`. It's `github-light` by default; any [Shiki theme](https://shiki.style/themes) works.

### Comment your CSS freely

Feel free to write comments and leave blank lines in `global.css` to keep it readable. None of it reaches your visitors. When you run `npm run dev`, Astro serves the file exactly as you wrote it so you can read and debug it in the browser. When you run `npm run build`, Astro automatically minifies it: comments are stripped, whitespace is removed, and values are shortened (`#ffffff` becomes `#fff`). Because the result is so small, it's inlined straight into each page's `<head>`, so the browser never makes a separate request for it.

For this theme, that turns a 3.5 KB readable source file into roughly 900 bytes over the wire. There's nothing to configure; it happens on every build.

## Part 2: Markdown reference

Everything below is written in plain markdown. Open this file in `src/content/blog/hello-world.md` to see the source side by side with the result.

### Text

Regular paragraphs are just lines of text separated by a blank line. You can make text **bold** with two asterisks, *italic* with one, ~~strikethrough~~ with two tildes, and `inline code` with backticks. Links look like [this](https://docs.astro.build) and are written as `[text](url)`.

### Headings

This section's title is an `###` heading; the "Part 2" title above is `##`. Use `##` for major sections and `###` for the parts within them. The post title itself comes from the frontmatter, so you never need a `#` heading in the body.

### Lists

An unordered list uses dashes:

- Write a post
- Save the file
- The site rebuilds instantly

An ordered list uses numbers:

1. Create a file in `src/content/blog/`
2. Add frontmatter at the top
3. Write in markdown below it

Lists can nest by indenting two spaces:

- Fruit
  - Apples
  - Pears
- Vegetables
  - Carrots

Task lists are written as `- [x]` for done and `- [ ]` for not yet:

- [x] Install the theme
- [x] Read this post
- [ ] Write something of your own

### Quotes

> Blockquotes start each line with a `>`. They're good for quoting other people, or your past self.
>
> A blank `>` line separates paragraphs inside the quote.

### Code

Fenced code blocks start and end with three backticks. Put the language name after the opening backticks to get syntax highlighting:

```js
function greet(name) {
  return `Hello, ${name}!`;
}
```

```yaml
title: My great idea
date: 2026-08-17
draft: true
```

To show a change, use `diff` as the language and start each line with `+` for added, `-` for removed, or a space for unchanged:

```diff
 export const SITE_TITLE = 'Minimal Astro Theme';
-export const DATE_LOCALE = 'en-US';
+export const DATE_LOCALE = 'en-GB';
```

### Tables

Tables are drawn with pipes and a row of dashes under the header:

| Command           | What it does                        |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start the dev server                |
| `npm run build`   | Build the site into `dist/`         |
| `npm run preview` | Preview the built site locally      |

### Images

Put image files in the `public/` folder and reference them from the root with a leading slash. This one is `public/sample-image.svg`:

![A grey rectangle labelled "Sample image"](/sample-image.svg)

The text in square brackets is the alt text, which describes the image for screen readers and shows if the image fails to load.

### Horizontal rules

Three dashes on their own line draw a divider:

---

### Footnotes

You can add a footnote with `[^1]` in the text and a matching `[^1]: ...` line anywhere in the file.[^1] The footnotes are collected at the end of the post automatically.

That's every feature this theme styles. Delete this post and `how-to-add-a-post.md` whenever you're ready to make the blog your own.

[^1]: Like this. Click the arrow to jump back to where you were.
