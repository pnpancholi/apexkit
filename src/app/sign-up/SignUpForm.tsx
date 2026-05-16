'use client'

import React from 'react'
import Link from 'next/link'
import { FaGoogle } from 'react-icons/fa'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Alert from '@/components/ui/Alert'
import { signInWithGoogle, signUp } from '@/actions/auth'

export default function SignUpForm() {
  const [formState, formAction, isPending] = React.useActionState(signUp, null)
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
    <Card title="Create Account">
      <form action={formAction} className="space-y-4">
        <Input type="text" name="name" required placeholder="Full Name" />
        <Input type="email" name="email" required placeholder="Email" />
        <Input type="password" name="password" required placeholder="Password (6+ characters)" />
        {formState?.message && (
          <Alert type={formState.success ? 'success' : 'error'} message={formState.message} />
        )}

        <Button type="submit" color="primary" className="my-5 w-full" isLoading={isPending}>
          Create Account
        </Button>
        <div className="divider">Or</div>
        <Button
          type="button"
          onClick={handleGoogleAuth}
          color="secondary"
          className="my-2 w-full"
          isLoading={googleAuthLoading}
        >
          <FaGoogle />
          Sign In with Google
        </Button>
        {googleAuthError && <Alert type="error" message={googleAuthError} />}
      </form>

      <div className="text-center">
        <Link href="/sign-in" className="text-sm">
          Already have an account ? Sign In
        </Link>
      </div>
    </Card>
  )
}
