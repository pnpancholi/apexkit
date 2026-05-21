import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { magicLink } from 'better-auth/plugins'
import { db } from '@/db/index'
import * as schema from '@/db/schema/auth'
import { nextCookies } from 'better-auth/next-js'
import {
  magicLinkTemplate,
  resetPasswordTemplate,
  verifyEmailTemplate,
} from '@/email/EmailTemplates'
import { emailProvider } from '@/email/emailProvider'

if (!db) {
  console.error('[auth.ts]: database not available')
  throw new Error('[auth.ts]: database not available')
}

// ToDo: Abstract away email stuff , including email client//
export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL || 'http://localhost:3000',
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema,
  }),
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url }) => {
      await emailProvider.send(user.email, resetPasswordTemplate(url))
    },
    onPasswordReset: async ({ user }) => {
      console.log(`Password for ${user.email} updated`)
    },
  },
  user: {
    changeEmail: { enabled: true },
  },
  emailVerification: {
    enabled: true,
    sendVerificationEmail: async ({ user, url }) => {
      await emailProvider.send(user.email, verifyEmailTemplate(url))
    },
  },
  socialProviders: {
    google: {
      prompt: 'select_account',
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  plugins: [
    nextCookies(),
    magicLink({
      sendMagicLink: async ({ email, url }) => {
        await emailProvider.send(email, magicLinkTemplate(url))
      },
      expiresIn: 300,
    }),
  ],
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
  databaseOptions: {
    autoSetup: true, // creates user , sessions, and verification
  },
})
