'use client'
import Link from 'next/link'
import React from 'react'
import { FaGoogle } from 'react-icons/fa'
import { signInWithGoogle, signUp } from '@/actions/auth'
import Button from '@/components/Button'
import Card from '@/components/Card'

export default function SignUp() {
  const [signUpState, signUpAction, signUpPending] = React.useActionState(signUp, null)
  const [GoogleAuthLoading, setGoogleAuthLoading] = React.useState(false)

  const handleGoogleAuth = () => {
    setGoogleAuthLoading(true)
    signInWithGoogle()
  }
  return (
    <div className="flex min-h-screen justify-center bg-base-200 px-4 py-12">
      <div className="w-full max-w-md">
        <Card title="Create Account" className="w-full max-w-md bg-base-100 shadow-2xl mt-25">
          <form action={signUpAction} className="space-y-4">
            <input
              className="input input-bordered w-full"
              placeholder="Full Name"
              type="name"
              name="name"
              required
            />
            <input
              className="input input-bordered w-full"
              placeholder="Email"
              type="email"
              name="email"
              required
            />
            <input
              className="input input-bordered w-full"
              placeholder="Password (6+ characters)"
              type="password"
              name="password"
              required
            />
            {signUpState?.success === false && (
              <div className="alert alert-error alert-soft">{signUpState.message}</div>
            )}

            <Button
              type="submit"
              color="primary"
              className="my-5 w-full"
              isLoading={signUpPending}
            >
              {signUpPending ? 'Creating Account' : 'Create Account'}
            </Button>
            <div className="divider">Or</div>
            <Button
              type="button"
              onClick={handleGoogleAuth}
              color="secondary"
              className="my-2 w-full"
              isLoading={GoogleAuthLoading}
            >
              <FaGoogle />
              Sign In with Google
            </Button>
          </form>

          <div>
            <Link href="/sign-in" className="text-center text-sm">
              Already have an account ? Sign In
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}
