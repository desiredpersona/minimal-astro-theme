import rss from '@astrojs/rss';
import { getPosts } from '../utils/posts';
import { SITE_TITLE, SITE_DESCRIPTION, SHOW_TAGS } from '../consts';

export async function GET(context) {
  const posts = await getPosts();

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
      // Feed readers can show tags as categories
      categories: SHOW_TAGS ? post.data.tags : [],
    })),
  });
}
