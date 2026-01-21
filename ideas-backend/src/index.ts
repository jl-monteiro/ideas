import { Hono } from "hono";

const app = new Hono();

const router = app
  .get("/", (c) => {
    return c.text("Hello Hono!");
  })
  .get("/api/people", (c) => {
    return c.json([
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
    ]);
  });


export default app;
