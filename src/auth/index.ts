import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { magicLink } from 'better-auth/plugins'
import { db } from '@/db/index'
import * as schema from '@/db/schema/auth'
import {
  magicLinkTemplate,
  resetPasswordTemplate,
  verifyEmailTemplate,
} from '@/email/EmailTemplates'
import { emailProvider } from '@/email/emailProvider'

// ---------------------- Guards -----------------------------------------//
// -----------------------------------------------------------------------//
// -----------------------------------------------------------------------//
if (!db) {
  console.error('[auth.ts]: database not available')
  throw new Error('[auth.ts]: database not available')
}
//-----------------------------------------------------------------------//
//-----------------------------------------------------------------------//
//----------------------------------------------------------------------//

// ToDo: Abstract away email stuff , including email client//
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema, // important for mapping tables
  }),
  // Authentication with email and password
  emailAndPassword: {
    enabled: true,
    // can take token aswell//
    sendResetPassword: async ({ user, url }) => {
      await emailProvider.send(user.email, resetPasswordTemplate(url))
    },
    // toDO: send email to password updates//
    onPasswordReset: async ({ user }) => {
      console.log(`Password for ${user.email} updated`)
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
      await emailProvider.send(user.email, verifyEmailTemplate(url))
    },
  },
  //-------------------------------
  //-------------------------------
  //-------------------------------
  // Social Login
  socialProviders: {
    google: {
      prompt: 'select_account',
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  // ------------------------------
  // ------------------------------
  // ------------------------------
  // Authentication with magicLink
  plugins: [
    magicLink({
      sendMagicLink: async ({ email, url }) => {
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
    // biome-ignore lint/suspicious/noExplicitAny: better-auth callbacks not typed
    onError: (error: any) => {
      console.error('Better Auth Error:', error)
    },
    // biome-ignore lint/suspicious/noExplicitAny: better-auth callbacks not typed
    onSignUp: ({ user }: any) => {
      console.log('Sign-up success:', user.email)
    },
    // biome-ignore lint/suspicious/noExplicitAny: better-auth callbacks not typed
    onSignIn: ({ user }: any) => {
      console.log('Sign-in success:', user.email)
    },
  },
  //----------------------------------
  //----------------------------------
  //----------------------------------
  databaseOptions: {
    autoSetup: true, // creates user , sessions, and verification
  },
})
