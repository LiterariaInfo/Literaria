ALTER TABLE "User" RENAME TO "admin";--> statement-breakpoint
ALTER TABLE "ArticleContent" RENAME TO "article_content";--> statement-breakpoint
ALTER TABLE "Article" RENAME TO "article";--> statement-breakpoint
ALTER TABLE "RecommendedArticle" RENAME TO "recommended_article";--> statement-breakpoint
ALTER TABLE "article" RENAME COLUMN "createdAt" TO "created_at";--> statement-breakpoint
ALTER TABLE "article" RENAME COLUMN "parentID" TO "parent_id";--> statement-breakpoint
ALTER TABLE "article_content" RENAME COLUMN "articleID" TO "article_id";--> statement-breakpoint
ALTER TABLE "recommended_article" RENAME COLUMN "articleID" TO "article_id";--> statement-breakpoint
ALTER TABLE "admin" DROP CONSTRAINT "User_user_unique";--> statement-breakpoint
ALTER TABLE "article" DROP CONSTRAINT "foreign";
--> statement-breakpoint
ALTER TABLE "article_content" DROP CONSTRAINT "ArticleContent_articleID_Article_id_fk";
--> statement-breakpoint
ALTER TABLE "recommended_article" DROP CONSTRAINT "RecommendedArticle_articleID_Article_id_fk";
--> statement-breakpoint
ALTER TABLE "article" ALTER COLUMN "created_at" SET DATA TYPE timestamp;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "article" ADD CONSTRAINT "foreign" FOREIGN KEY ("parent_id") REFERENCES "public"."article"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "article_content" ADD CONSTRAINT "article_content_article_id_article_id_fk" FOREIGN KEY ("article_id") REFERENCES "public"."article"("id") ON DELETE restrict ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "recommended_article" ADD CONSTRAINT "recommended_article_article_id_article_id_fk" FOREIGN KEY ("article_id") REFERENCES "public"."article"("id") ON DELETE restrict ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "parent_idx" ON "article" USING btree ("parent_id");--> statement-breakpoint
ALTER TABLE "admin" ADD CONSTRAINT "admin_user_unique" UNIQUE("user");