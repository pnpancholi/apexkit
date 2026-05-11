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
  const [passwordState, passwordAction, passwordPending] = React.useActionState(
    signInWithPassword,
    null,
  )

  const [magicLinkState, magicLinkAction, magicLinkPending] = React.useActionState(
    sendMagicLink,
    null,
  )
  return (
    <Card title="Sign In" className="w-full max-w-md bg-base-100 shadow-2xl mt-25">
      <form className="space-y-4" id="password-form" action={passwordAction}>
        <Input name="email" type="email" placeholder="Email" required />
        <Input type="password" name="password" required placeholder="Password" />
        {/*-------------Error Handling for sign in with password----------*/}
        {passwordState?.message && (
          <Alert
            type={passwordState.success ? 'success' : 'error'}
            message={passwordState.message}
          />
        )}
        <Button
          type="submit"
          className="w-full"
          disabled={passwordPending}
          isLoading={passwordPending}
        >
          Sign In With Password
        </Button>
      </form>
      <Button type="button" color="secondary" className="w-full mt-5" onClick={signInWithGoogle}>
        <FaGoogle /> Sign In With Google
      </Button>
      <div className="divider">Or</div>

      {/*-----------------------Magic Link--------------------------------*/}
      <form className="space-y-4" id="magic-link-form" action={magicLinkAction}>
        <Input type="email" name="email" placeholder="Email" required />
        {/*--------------------------Error Handling and response for magic link*/}
        {magicLinkState && (
          <Alert
            type={magicLinkState.success ? 'success' : 'error'}
            message={magicLinkState.message}
          />
        )}
        {/*--------------------------------------------------------------------*/}

        <Button
          type="submit"
          disabled={magicLinkPending}
          isLoading={magicLinkPending}
          className="w-full my-5"
        >
          Send Magic Link
        </Button>
      </form>

      {/*---------------------------------Resetting----------------------------*/}
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
