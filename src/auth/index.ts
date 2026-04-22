import { betterAuth, User } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from '@/db/index'
import { magicLink } from 'better-auth/plugins'
import * as schema from '@/db/schema/auth'
import { emailProvider } from '@/email/emailProvider'
import {
  magicLinkTemplate,
  verifyEmailTemplate,
  resetPasswordTemplate,
} from '@/email/EmailTemplates'

// ---------------------- Guards -----------------------------------------//
// -----------------------------------------------------------------------//
// -----------------------------------------------------------------------//
if (!db) {
  console.error('[auth.ts]: database not available')
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
    onError: (error: any) => {
      console.error('Better Auth Error:', error)
    },
    onSignUp: ({ user }: any) => {
      console.log('Sign-up success:', user.email)
    },
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
