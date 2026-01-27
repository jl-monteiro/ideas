import { desc } from "drizzle-orm";
import { db } from "./db";
import { posts } from "./schema/posts";

export const getAllPosts = async () => {
  return await db
    .select({
      id: posts.id,
      name: posts.name,
      video: posts.video,
      type: posts.type,
      createdAt: posts.createdAt,
    })
    .from(posts)
    .orderBy(desc(posts.createdAt));
};
