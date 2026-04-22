'use client'

import { useActionState } from 'react'
import { signInWithPassword, sendMagicLink, signInWithGoogle } from '@/actions/auth'
import Link from 'next/link'
import { FaGoogle } from 'react-icons/fa'

export default function SignIn() {
  const [passwordState, passwordAction, passwordPending] = useActionState(signInWithPassword, null)
  const [magicLinkState, magicLinkAction, magicLinkPending] = useActionState(sendMagicLink, null)

  return (
    <div className="flex min-h-screen justify-center bg-base-200 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="card bg-base-100 shadow-2xl mt-25">
          <div className="card-body text-center">
            <h2 className="card-title justify-center text-2xl">Sign In</h2>

            {/*---------------------Email and Password---------------------------*/}
            <form className="space-y-4">
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
              {/*---------------------------------------------------------------*/}
              <button
                type="submit"
                className="btn btn-primary my-5 w-full"
                formAction={passwordAction}
                disabled={passwordPending}
              >
                {passwordPending ? 'Signing In...' : 'Sign In with Password'}
              </button>
            </form>
            <button type="button" className="btn btn-secondary my-2" onClick={signInWithGoogle}>
              <FaGoogle />
              Sign In with Google
            </button>
            <div className="divider"> Or</div>

            {/*-----------------------Magic Link--------------------------------*/}
            <form className="space-y-4">
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
              <button
                type="submit"
                className="btn btn-secondary my-5 w-full"
                formAction={magicLinkAction}
                disabled={magicLinkPending}
              >
                {magicLinkPending ? 'Sending  Magic Link' : 'Send Magic Link'}
              </button>
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
          </div>
        </div>
      </div>
    </div>
  )
}
