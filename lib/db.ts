import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from "pg"

if (!process.env.DATABASE_URL) {
  throw new Error("DB URL IS MISSING")
}

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Critical for Neon//
  },
})


client.connect().catch((err) => {
  console.error("DB connection failed!", err)
  process.exit(1)
})

console.log("DB connected successfully!")

export const db = drizzle(client)
