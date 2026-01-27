import { Hono } from "hono";
import { getAllPosts } from "../db/queries";

export const posts = new Hono();

posts.get("/", async (c) => {
  try {
    const posts = await getAllPosts();
    return c.json(posts);
  } catch (err) {
    console.error("Erro no get posts ", err);
    return c.json({ error: "Erro ao puxar posts" }, 500);
  }
});
