CREATE TYPE "public"."post_type" AS ENUM('effects', 'textures', 'genrl');--> statement-breakpoint
CREATE TABLE "posts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(256) NOT NULL,
	"video" varchar(512) NOT NULL,
	"file" varchar(1024) NOT NULL,
	"type" "post_type" DEFAULT 'effects' NOT NULL
);
