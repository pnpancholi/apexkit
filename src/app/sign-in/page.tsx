'use client'

import Link from 'next/link'
import { useActionState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { sendMagicLink, signInWithGoogle, signInWithPassword } from '@/actions/auth'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export default function SignIn() {
  const [passwordState, passwordAction, passwordPending] = useActionState(signInWithPassword, null)
  const [magicLinkState, magicLinkAction, magicLinkPending] = useActionState(sendMagicLink, null)

  return (
    <div className="flex min-h-screen justify-center bg-base-200 px-4 py-12">
      <div className="w-full max-w-md">
        <Card title="Sign In" className="w-full max-w-md bg-base-100 shadow-2xl mt-25">
          <form className="space-y-4" id="password-form" action={passwordAction}>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              required
            />
            {/*-------------Error Handling for sign in with password----------*/}
            {passwordState?.success === false && (
              <div className="alert alert-error alert-soft">{passwordState.message}</div>
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
          <Button
            type="button"
            color="secondary"
            className="w-full mt-5"
            onClick={signInWithGoogle}
          >
            <FaGoogle /> Sign In With Google
          </Button>
          <div className="divider">Or</div>

          {/*-----------------------Magic Link--------------------------------*/}
          <form className="space-y-4" id="magic-link-form" action={magicLinkAction}>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              required
            />
            {/*--------------------------Error Handling and response for magic link*/}
            {magicLinkState && (
              <>
                {magicLinkState?.success === false && (
                  <div className="alert alert-soft alert-error">{magicLinkState.message}</div>
                )}
                {magicLinkState.success === true && (
                  <div className="alert alert-soft alert-success">{magicLinkState.message}</div>
                )}
              </>
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
      </div>
    </div>
  )
}
