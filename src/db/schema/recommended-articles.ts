import { integer, pgTable } from 'drizzle-orm/pg-core';
import { articles } from '@/db/schema/articles';

export const recommendedArticles = pgTable('recommended_article', {
  articleID: integer('article_id')
    .primaryKey()
    .references(() => articles.id, {
      onDelete: 'cascade'
    })
});
