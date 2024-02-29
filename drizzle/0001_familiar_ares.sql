DROP TABLE "_prisma_migrations";--> statement-breakpoint
ALTER TABLE "Article" DROP CONSTRAINT "Article_parentID_fkey";
--> statement-breakpoint
ALTER TABLE "ArticleContent" DROP CONSTRAINT "ArticleContent_articleID_fkey";
--> statement-breakpoint
ALTER TABLE "RecommendedArticle" DROP CONSTRAINT "RecommendedArticle_articleID_fkey";
--> statement-breakpoint
DROP INDEX IF EXISTS "User_user_key";--> statement-breakpoint
DROP INDEX IF EXISTS "ArticleContent_articleID_key";--> statement-breakpoint
DROP INDEX IF EXISTS "RecommendedArticle_articleID_key";--> statement-breakpoint
ALTER TABLE "Article" ALTER COLUMN "createdAt" SET DEFAULT now();--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Article" ADD CONSTRAINT "foreign" FOREIGN KEY ("parentID") REFERENCES "Article"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ArticleContent" ADD CONSTRAINT "ArticleContent_articleID_Article_id_fk" FOREIGN KEY ("articleID") REFERENCES "Article"("id") ON DELETE no action ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "RecommendedArticle" ADD CONSTRAINT "RecommendedArticle_articleID_Article_id_fk" FOREIGN KEY ("articleID") REFERENCES "Article"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "User" ADD CONSTRAINT "User_user_unique" UNIQUE("user");