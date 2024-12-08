import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const admins = pgTable('admin', {
  id: serial('id').primaryKey(),
  user: text('user').notNull().unique(),
  password: text('password').notNull()
});
