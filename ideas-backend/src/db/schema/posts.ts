import { pgEnum, pgTable, uuid, varchar, timestamp } from "drizzle-orm/pg-core";
export const postTypeEnum = pgEnum("post_type", [
  "effects",
  "textures",
  "genrl",
]);

export const Posts = pgTable("posts", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 256 }).notNull(),
  video: varchar({ length: 512 }).notNull(),
  file: varchar({ length: 1024 }).notNull(),
  type: postTypeEnum().default("effects").notNull(),
  createdAt: timestamp("created_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
});
