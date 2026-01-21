import { db, pool } from "../src/db/db";
import * as schema from "../src/db/schema/users";
import { seed } from "drizzle-seed";

const seedDb = async () => {
  await seed(db, schema);
};

seedDb()
  .then(() => {
    console.log("seeded database");
    return pool.end();
  })
  .catch((err) => {
    console.error(`error seeding database: \n${err}`);
    return pool.end();
  });
