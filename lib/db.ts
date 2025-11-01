import postgres from "postgres"
import {drizzle} from "drizzle-orm/postgres-js";

if (!process.env.DATABASE_URL) {
  throw new Error("DB URL IS MISSING")
}
const sql = postgres(process.env.DATABASE_URL!)
const db = drizzle(sql)
console.log("DB connection ", db);
