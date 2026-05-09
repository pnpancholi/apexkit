'use client'

import React from 'react'
import { signInWithGoogle, signUp } from '@/actions/auth'
import SignUpForm from './SignUpForm'

export default function SignUp() {
  const [signUpState, signUpAction, signUpPending] = React.useActionState(signUp, null)
  const [googleAuthLoading, setGoogleAuthLoading] = React.useState(false)

  const handleGoogleAuth = () => {
    setGoogleAuthLoading(true)
    signInWithGoogle()
  }
  return (
    <div className="flex min-h-screen justify-center bg-base-200 px-4 py-12">
      <div className="w-full max-w-md"></div>
      <SignUpForm
        formState={signUpState}
        formAction={signUpAction}
        isPending={signUpPending}
        googleAuthLoading={googleAuthLoading}
        handleGoogleAuth={handleGoogleAuth}
      />
    </div>
  )
}
