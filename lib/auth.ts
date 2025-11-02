import {betterAuth} from "better-auth";
import {drizzleAdapter} from "better-auth/adapters/drizzle";
import {db} from "./db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {provider: "pg"}),
  emailAndPassword: {enabled: true},
  databaseOptions: {
    autoSetup: true, // creates user , sessions, etc
  },
  //ToDo: Add email verification//
  magicLink: {enabled: true}
});
