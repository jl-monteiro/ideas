import { sql } from "drizzle-orm";
import { db } from "./db";
import { Users } from "./schema/users";

export const getUserById = async (userId: string) => {
    return await db.select().from(Users).where(sql`${Users.id} = ${userId}`);
}
export const getAllUsers = async () => {
    return await db.select().from(Users);
}
