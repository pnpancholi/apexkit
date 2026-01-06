import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/index";
import { magicLink } from "better-auth/plugins";
import * as schema from "@/db/schema/auth";
import { emailProvider } from "./emailProvider"
import { magicLinkTemplate, verifyEmailTemplate, resetPasswordTemplate } from "./EmailTemplates"

// ---------------------- Guards -----------------------------------------//
// -----------------------------------------------------------------------//
// -----------------------------------------------------------------------//
if (!db) {
  console.error("[auth.ts]: database not available");
}
//-----------------------------------------------------------------------//
//-----------------------------------------------------------------------//
//----------------------------------------------------------------------//

// ToDo: Abstract away email stuff , including email client//
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema, // important for mapping tables
  }),
  // Authentication with email and password
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url, token }, req) => {
      await emailProvider.send(user.email, resetPasswordTemplate(url))
    },
    // toDO: send email to password updates//
    onPasswordReset: async ({ user }, req) => {
      console.log(`Password for ${user.email} updated`);
    },
  },
  // Allowing user to update email
  // ----------------------------
  // ---------------------------
  user: {
    changeEmail: { enabled: true, callbackUrl: "/profile" },
  },
  emailVerification: {
    enabled: true,
    callbackUrl: "/profile",
    sendVerificationEmail: async ({ user, url, token }) => {
      await emailProvider.send(user.email, verifyEmailTemplate(url))
    },

  },
  // ------------------------------
  // ------------------------------
  // ------------------------------
  // Authentication with magicLink
  plugins: [
    magicLink({
      sendMagicLink: async ({ email, token, url }, request) => {
        await emailProvider.send(email, magicLinkTemplate(url))
      },
      expiresIn: 300,
    }),
  ],
  // ------------------------------
  // ------------------------------
  // ------------------------------
  // Logging
  // ------------------------------
  // ------------------------------
  // ------------------------------
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
  //----------------------------------
  //----------------------------------
  //----------------------------------
  databaseOptions: {
    autoSetup: true, // creates user , sessions, and verification
  },
});
