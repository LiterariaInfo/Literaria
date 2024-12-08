import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { config } from 'dotenv';
import { articles } from '@/db/schema/articles';
import { admins } from '@/db/schema/admins';
import { recommendedArticles } from '@/db/schema/recommended-articles';
import { articleContents } from '@/db/schema/article-contents';

config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

export const db = drizzle(pool, {
  schema: {
    articles,
    admins,
    recommendedArticles,
    articleContents
  }
});
