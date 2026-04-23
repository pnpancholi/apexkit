import { drizzle } from 'drizzle-orm/postgres-js'
import 'dotenv/config'
import postgres from 'postgres'
import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js'

const DATABASE_URL = process.env.DATABASE_URL?.trim()
let db: PostgresJsDatabase | null = null

if (!DATABASE_URL) {
  if (process.env.NODE_ENV !== 'production') {
    console.error('ApexKit - DB ERROR [db.ts]: Please add your DATABASE_URL correctly')
    console.error('ApexKit - DB ERROR [db.ts]: DATABASE_URL is missing, auth is disabled')
  } else {
    console.info('ApexKit - DB ERROR [db.ts]: DATABASE_URL is missing, auth is disabled')
  }
  db = null
} else {
  const client = postgres(DATABASE_URL, {
    ssl: 'require', //Most providers need this
    idle_timeout: 20,
    connect_timeout: 30,
    max: 10,
    prepare: false,
  })
  console.info('ApexKit [db.ts]: Database connected successfully')
  db = drizzle(client)
}

export { db }
