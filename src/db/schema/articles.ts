import {
  foreignKey,
  index,
  integer,
  pgTable,
  serial,
  text,
  timestamp
} from 'drizzle-orm/pg-core';

export const articles = pgTable(
  'article',
  {
    id: serial('id').primaryKey(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    title: text('title').notNull(),
    author: text('author').notNull(),
    image: text('image').notNull(),
    parentID: integer('parent_id')
  },
  (table) => {
    return {
      foreign: foreignKey({
        columns: [table.parentID],
        foreignColumns: [table.id],
        name: 'foreign'
      }).onDelete('set null'),
      parentIdx: index('parent_idx').on(table.parentID)
    };
  }
);
