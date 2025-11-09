import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";
import * as schema from "@/schema/auth";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema, // important for mapping tables
  }),
  emailAndPassword: { enabled: true },
  // logging
  callbacks: {
    onError: (error: any) => {
      console.error("Better Auth Error:", error);
    },
    onSignUp: ({ user }: any) => {
      console.log("Sign-up success:", user.email);
    },
    onSignIn: ({ user }: any) => {
      console.log("Sign-in success:", user.email);
    },
  },
  //---------------------------------------//
  databaseOptions: {
    autoSetup: true, // creates user , sessions, etc
  },
  //ToDo: Add email verification//
  magicLink: { enabled: true }
});
