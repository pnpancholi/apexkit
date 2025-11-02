import "dotenv/config"
import {defineConfig} from "drizzle-kit"

export default defineConfig({
  out: ".drizzle",
  schema: "./schema/auth.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  verbose: true, // For debugging
});
