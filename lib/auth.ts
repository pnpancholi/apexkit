import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";
import { magicLink } from "better-auth/plugins";
import * as schema from "@/schema/auth";
import { Resend } from "resend";
import { magicLinkEmail } from "./magiclink";


// ---------------------- Guards -----------------------------------------//
if (!db) {
  console.error("ApexKit [auth.ts]: database not available");
}

const EMAIL_API = process.env.EMAIL_API?.trim();

if (!EMAIL_API) {
  console.error("ApexKit [auth.ts]: Missing email api");
}

const emailClient = EMAIL_API
  ? new Resend(EMAIL_API)
  : {
    emails: {
      send: async () => {
        console.error("ApexKit [auth.ts]: Missing email api configuration");
      },
    },
  };
//-----------------------------------------------------------------------//

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
      void emailClient.emails.send({
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
  // ----------------------------
  // ---------------------------
  user: {
    changeEmail: { enabled: true },
  },
  emailVerification: {
    enabled: true,
    sendVerificationEmail: async ({ user, url }) => {
      try {
        await emailClient.emails.send({
          from: "onboarding@resend.dev",
          to: user.email,
          subject: "Verify your email",
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px;">
            <h2>Verify Your Email</h2>
            <p>Click the button below to confirm your email address:</p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${url}" style="background: #0066ff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                Verify Email
              </a>
            </div>
            <p>Or copy and paste this link:</p>
            <p><a href="${url}">${url}</a></p>
            <p style="color: #666; font-size: 12px;">This link expires in 1 hour.</p>
            </div>
          `,
        })
        console.log("Email verification sent")
      } catch (error) {
        console.error("Failed to send verificaion email", error)
      }
    }
  },
  // ------------------------------
  // ------------------------------
  // ------------------------------
  // Authentication with magicLink
  plugins: [
    magicLink({
      sendMagicLink: async ({ email, token, url }, request) => {
        try {
          await emailClient.emails.send({
            from: "onboarding@resend.dev",
            to: email,
            subject: "Sign in using this magic link",
            html: magicLinkEmail(url),
          });
        } catch (error) {
          console.error("Failed to send maic link", error);
          throw error;
        }
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
