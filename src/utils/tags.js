// A tag page with fewer posts than this asks search engines not to list it
// and is left out of the sitemap. A page linking to one post is "thin
// content" that can drag down how search engines see the whole site. The
// page still works for readers, and becomes indexable once it has enough posts.
export const TAG_INDEX_MIN_POSTS = 2;

// Turns a tag into its URL: "Web Dev" → "web-dev". Tags that differ only in
// capitals, spaces or punctuation share one page.
export function tagSlug(tag) {
  return tag
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '');
}

// Groups posts by tag. Returns [{ name, slug, posts }], sorted by name.
// `posts` should already be newest first; each tag's list keeps that order,
// and the tag is shown as it was written in its newest post.
export function groupByTag(posts) {
  const tags = new Map();

  for (const post of posts) {
    for (const name of post.data.tags) {
      const slug = tagSlug(name);
      if (!slug) continue;
      if (!tags.has(slug)) tags.set(slug, { name, slug, posts: [] });
      const tag = tags.get(slug);
      // A post tagged both "CSS" and "css" is only listed once
      if (!tag.posts.includes(post)) tag.posts.push(post);
    }
  }

  return [...tags.values()].sort((a, b) => a.name.localeCompare(b.name));
}
