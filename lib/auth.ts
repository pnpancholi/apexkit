import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";
import { magicLink } from "better-auth/plugins";
import * as schema from "@/schema/auth";
import { Resend } from "resend";
import { magicLinkEmail } from "./magiclink";

const emailClient = new Resend(process.env.EMAIL_API);

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
      await emailClient.emails.send({
        from: "onboarding@resend.dev",
        to: user.email,
        subject: "Reset your password",
        text: `Click the link to reset your password: ${url}`,
      });
    },
    onPasswordReset: async ({ user }, req) => {
      console.log(`Password for ${user.email} updated`);
    },
  },
  // Allowing user to update email
  user: {
    changeEmail: { enabled: true },
  },
  // Authentication with magicLink
  plugins: [
    magicLink({
      sendMagicLink: async ({ email, token, url }, request) => {
        try {
          const { data, error } = await emailClient.emails.send({
            from: "onboarding@resend.dev",
            to: email,
            subject: "Sign in using this magic link",
            html: magicLinkEmail(url),
          });
          if (error) {
            console.error("Magic Link Error: ", error);
            throw new Error("Failed to send magic link email");
          }
          console.log("Magic link sent to: ", email);
        } catch (error) {
          console.error("Failed to send maic link", error);
          throw error;
        }
      },
      expiresIn: 300,
    }),
  ],

  // Logging
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
});
