import { Hono } from "hono";
import { getUserById } from "./db/queries";
import { auth } from "./lib/auth";

const app = new Hono().basePath('/api')

app.on(["POST", "GET"], "/auth/*", (c) => auth.handler(c.req.raw));
app.get("/users/:userId", async (c) => {
  try {
    const userId = c.req.param("userId");
    const user = await getUserById(userId);
    return c.json(user);
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    return c.json({ error: "Internal Server Error" }, 500);
  }
});

export default app;
