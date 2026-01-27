import { Hono } from "hono";
import { cors } from "hono/cors";
import { auth } from "./lib/auth";
import { posts } from "./routes/posts.routes";

const app = new Hono().basePath('/api')

app.use(
  "*",
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.on(["POST", "GET"], "/auth/**", (c) => auth.handler(c.req.raw));
app.route('/posts', posts)

export default app;
