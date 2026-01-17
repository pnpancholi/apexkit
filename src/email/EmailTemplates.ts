import type { EmailTemplate } from "./emailProvider"

export const magicLinkTemplate = (url: string): EmailTemplate => ({
  subject: "Sign into your using magic link",
  html: `
    <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px;">
      <h2>Sign in to your account</h2>
      <p>Click the button below to sign in with your magic link:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${url}" style="background: #0066ff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
          Sign in
        </a>
      </div>
      <p style="color: #666; font-size: 14px;">Or copy and paste this link:</p>
      <p><a href="${url}" style="color: #0066ff;">${url}</a></p>
      <p style="color: #999; font-size: 12px;">This link expires in 5 minutes.</p>
    </div>
  `
})

export const verifyEmailTemplate = (url: string): EmailTemplate => ({
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
      <p style="color: #666; font-size: 14px;">Or copy and paste this link:</p>
      <p><a href="${url}" style="color: #0066ff;">${url}</a></p>
      <p style="color: #999; font-size: 12px;">This link expires in 1 hour.</p>
    </div>
  `
})

export const resetPasswordTemplate = (url: string): EmailTemplate => ({
  subject: "Reset your password",
  html: `
    <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px;">
      <h2>Verify Your Email</h2>
      <p>Click the button below to confirm your email address:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${url}" style="background: #0066ff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
          Verify Email
        </a>
      </div>
      <p style="color: #666; font-size: 14px;">Or copy and paste this link:</p>
      <p><a href="${url}" style="color: #0066ff;">${url}</a></p>
      <p style="color: #999; font-size: 12px;">This link expires in 1 hour.</p>
    </div>
  `
})

