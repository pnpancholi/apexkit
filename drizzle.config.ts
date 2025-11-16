import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: ".drizzle",
  schema: "./schema/auth.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    //forcing IPv4
    host: new URL(process.env.DATABASE_URL!).hostname,
  },
  verbose: true, // For debugging
});
