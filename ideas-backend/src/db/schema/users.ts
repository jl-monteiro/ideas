import { pgEnum, pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const rolesEnum = pgEnum("roles", ["USER", "ADMIN"]);

export const Users = pgTable("users", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 256 }).notNull(),
  email: varchar({ length: 256 }).notNull().unique(),
  password: varchar({ length: 256 }).notNull(),
  role: rolesEnum().default("USER").notNull(),
});