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
  const [googleState, googleAction, isGooglePending] = React.useActionState(signInWithGoogle, null)

  return (
    <Card title="Create Account">
      <form action={formAction} className="w-full space-y-4">
        <Input name="name" placeholder="Full Name" required />
        <Input type="email" name="email" placeholder="Email" required />
        <Input type="password" name="password" placeholder="Password (8+ characters)" required />
        {formState?.message && (
          <Alert type={formState.success ? 'success' : 'error'} message={formState.message} />
        )}
        <Button type="submit" className="w-full" isLoading={isPending}>
          Create Account
        </Button>
      </form>

      <div className="divider">Or</div>

      <form action={googleAction} className="w-full">
        {googleState?.message && (
          <Alert type={googleState.success ? 'success' : 'error'} message={googleState.message} />
        )}
        <Button type="submit" color="secondary" className="w-full" isLoading={isGooglePending}>
          <FaGoogle aria-hidden="true" /> Sign Up with Google
        </Button>
      </form>

      <div className="text-center">
        <Link href="/sign-in" className="link text-sm">
          Already have an account? Sign In
        </Link>
      </div>
    </Card>
  )
}
