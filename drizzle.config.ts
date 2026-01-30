import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/db/migrations",
  schema: "./src/db/schema/",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    //forcing IPv4
    host: new URL(process.env.DATABASE_URL!).hostname,
  },
  verbose: true, // For debugging
});
