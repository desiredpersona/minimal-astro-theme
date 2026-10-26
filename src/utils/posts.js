import { getCollection } from 'astro:content';

// Every published post, newest first. Drafts are left out.
export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
