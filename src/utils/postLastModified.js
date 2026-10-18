import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

// Used by astro.config.mjs to give each post a <lastmod> date in the sitemap,
// so search engines know when to re-read it. The config runs before Astro's
// content collections are available, so this reads the `date:` and
// `updated:` lines straight out of each post's frontmatter.
//
// Returns a map like { '/blog/hello-world/': Date, ... }.
export function postLastModified(dir = './src/content/blog') {
  const dates = {};

  for (const file of readdirSync(dir, { recursive: true })) {
    if (!file.endsWith('.md')) continue;

    const text = readFileSync(join(dir, file), 'utf8');
    const frontmatter = text.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
    const field = (name) =>
      frontmatter.match(new RegExp(`^${name}:\\s*['"]?([^'"\\n]+)`, 'm'))?.[1];

    const date = new Date(field('updated') ?? field('date'));
    if (isNaN(date)) continue;

    // `my-post.md` and `my-post/index.md` are both served at /blog/my-post/
    const slug = file
      .replaceAll('\\', '/')
      .replace(/(\/index)?\.md$/, '')
      .toLowerCase();
    dates[`/blog/${slug}/`] = date;
  }

  return dates;
}
