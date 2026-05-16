'use client'

import React from 'react'
import Link from 'next/link'
import { FaGoogle } from 'react-icons/fa'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Alert from '@/components/ui/Alert'
import { signInWithPassword, sendMagicLink, signInWithGoogle } from '@/actions/auth'

export default function SignInForm() {
  const [passwordState, passwordAction, passwordPending] = React.useActionState(signInWithPassword, null)
  const [magicLinkState, magicLinkAction, magicLinkPending] = React.useActionState(sendMagicLink, null)
  const [googleAuthLoading, setGoogleAuthLoading] = React.useState(false)
  const [googleAuthError, setGoogleAuthError] = React.useState<string | null>(null)

  const handleGoogleAuth = async () => {
    setGoogleAuthLoading(true)
    const res = await signInWithGoogle()
    setGoogleAuthLoading(false)
    if (!res.success) {
      setGoogleAuthError(res.message)
    }
  }

  return (
    <Card title="Sign In">
      <form className="space-y-4" id="password-form" action={passwordAction}>
        <Input name="email" type="email" placeholder="Email" required />
        <Input type="password" name="password" required placeholder="Password" />
        {passwordState?.message && <Alert type={passwordState.success ? 'success' : 'error'} message={passwordState.message} />}
        <Button type="submit" className="w-full" isLoading={passwordPending}>
          Sign In With Password
        </Button>
      </form>
      <Button type="button" color="secondary" className="w-full mt-5" onClick={handleGoogleAuth} isLoading={googleAuthLoading}>
        <FaGoogle /> Sign In With Google
      </Button>
      {googleAuthError && <Alert type="error" message={googleAuthError} />}
      <div className="divider">Or</div>

      <form className="space-y-4" id="magic-link-form" action={magicLinkAction}>
        <Input type="email" name="email" placeholder="Email" required />
        {magicLinkState && <Alert type={magicLinkState.success ? 'success' : 'error'} message={magicLinkState.message} />}
        <Button type="submit" isLoading={magicLinkPending} className="w-full my-5">
          Send Magic Link
        </Button>
      </form>
      <div className="flex flex-col text-center text-sm space-y-1">
        <Link href="/forgot-password" className="link">
          Forgot Password ?
        </Link>
        <Link href="/sign-up" className="link">
          Need an account? Sign Up
        </Link>
      </div>
    </Card>
  )
}
