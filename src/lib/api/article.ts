import { count, countDistinct, desc, eq, isNull, sql } from 'drizzle-orm';
import { alias } from 'drizzle-orm/pg-core';
import { db } from '@/db/db';
import { articles } from '@/db/schema/articles';
import { recommendedArticles } from '@/db/schema/recommended-articles';

export function getArticle(id: number) {
  return db.query.articles.findFirst({
    where: eq(articles.id, id),
    columns: {
      image: true,
      title: true,
      author: true,
      createdAt: true,
      id: true
    },
    with: {
      children: {
        columns: {
          image: true,
          title: true,
          author: true,
          createdAt: true,
          id: true
        },
        with: {
          children: true
        }
      },
      parent: true,
      content: true
    }
  });
}

export function getLatest() {
  return db.select().from(articles).limit(10).orderBy(desc(articles.createdAt));
}

export function getRecommended() {
  return db
    .select()
    .from(recommendedArticles)
    .innerJoin(articles, eq(recommendedArticles.articleID, articles.id));
}

export async function getCategories() {
  return db.query.articles.findMany({
    where: isNull(articles.parentID),
    columns: {
      title: true,
      id: true
    },
    with: {
      children: {
        columns: {
          title: true,
          id: true
        },
        with: {
          children: {
            columns: {
              title: true,
              id: true
            },
            with: {
              children: {
                columns: {
                  title: true,
                  id: true
                }
              }
            }
          }
        }
      }
    }
  });
}

export function getArticleNames() {
  const parent = alias(articles, 'parent');

  return db
    .select({
      title: articles.title,
      id: articles.id,
      parentTitle: parent.title
    })
    .from(articles)
    .leftJoin(parent, eq(parent.id, articles.parentID));
}

export async function getArticleCount() {
  return (
    await db
      .select({
        articles: count(articles.id),
        authors: countDistinct(articles.author),
        reviews: count(sql`CASE WHEN "parentID" = 9 THEN 1
        END`)
      })
      .from(articles)
  )[0];
}
