import { MetadataRoute } from 'next';
import { db } from '@/db/db';
import { articles } from '@/db/schema/articles';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const apiArticles = await db
    .select({
      id: articles.id
    })
    .from(articles);

  return [
    ...apiArticles.map((article) => ({
      url: `https://literaria.com/article/${article.id}`,
      lastModified: new Date()
    })),
    {
      url: 'https://literaria.info/gallery',
      lastModified: new Date()
    },
    {
      url: 'https://literaria.info/about'
    },
    {
      url: 'https://literaria.info',
      priority: 1
    }
  ];
}
