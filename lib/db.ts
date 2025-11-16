import { drizzle } from "drizzle-orm/postgres-js";
import "dotenv/config";
import postgres from "postgres";

if (!process.env.DATABASE_URL) {
  throw new Error("DB URL IS MISSING");
}
console.log("connecitons string", process.env.DATABASE_URL);
const url = new URL(process.env.DATABASE_URL);

const client = postgres(process.env.DATABASE_URL, {
  ssl: "require", // most providers need this//
  idle_timeout: 20,
  connect_timeout: 30,
  max: 10,
  prepare: false,
});

console.log("DB connected successfully!");

export const db = drizzle(client);
