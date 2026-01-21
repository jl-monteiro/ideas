import { sql } from "drizzle-orm";
import { db } from "./db";
import { user } from "./schema/user";

export const getUserById = async (userId: string) => {
    return await db.select().from(user).where(sql`${user.id} = ${userId}`);
}
export const getAllUsers = async () => {
    return await db.select().from(user);
}
