'use client'

import { useActionState } from 'react'
import { sendMagicLink, signInWithGoogle, signInWithPassword } from '@/actions/auth'
import SignInForm from './SignInForm'

export default function SignIn() {
  const [passwordState, passwordAction, passwordPending] = useActionState(signInWithPassword, null)
  const [magicLinkState, magicLinkAction, magicLinkPending] = useActionState(sendMagicLink, null)

  return (
    <div className="flex min-h-screen justify-center bg-base-200 px-4 py-12">
      <div className="w-full max-w-md"></div>
      <SignInForm
        passwordState={passwordState}
        passwordAction={passwordAction}
        passwordPending={passwordPending}
        magicLinkState={magicLinkState}
        magicLinkAction={magicLinkAction}
        magicLinkPending={magicLinkPending}
        signInWithGoogle={signInWithGoogle}
      />
    </div>
  )
}
