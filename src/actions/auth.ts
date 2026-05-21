'use server'

import { redirect } from 'next/navigation'
import { authClient } from '@/auth/client'
import type { ActionResponse } from '@/types'
import { auth } from '@/auth'
import { isAPIError } from 'better-auth/api'
import { headers } from 'next/headers'

export async function signUp(_: ActionResponse | null, formData: FormData): Promise<ActionResponse> {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  try {
    await auth.api.signUpEmail({
      returnHeaders: true,
      body: {
        name,
        email,
        password,
      },
    })
  } catch (error) {
    if (isAPIError(error)) {
      return { success: false, message: error.message }
    } else {
      console.error('[signUp]: Unexpected error', error)
      return { success: false, message: 'Something went wrong, Try again later' }
    }
  }
  redirect('/sign-in')
}

export async function signInWithPassword(_: ActionResponse | null, formData: FormData): Promise<ActionResponse> {
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    })
  } catch (error) {
    if (isAPIError(error)) {
      return {
        success: false,
        message: error.message,
      }
    } else {
      console.error('[signInWithPassword]: Unexpected error', error)
      return {
        success: false,
        message: 'Something went wrong, Please try again later',
      }
    }
  }
  redirect('/profile')
}

export async function sendMagicLink(_: ActionResponse | null, formData: FormData): Promise<ActionResponse> {
  const email = formData.get('email') as string

  try {
    const { error } = await authClient.signIn.magicLink({
      email,
      callbackURL: '/',
      newUserCallbackURL: '/',
      errorCallbackURL: '/',
    })
    if (error) {
      return {
        success: false,
        message: "Sorry, we don't recognise that email",
      }
    } else {
      return { success: true, message: 'Magic link is on its way' }
    }
  } catch (error) {
    console.error('[sendMagicLink]: Unexpected error', error)
    return {
      success: false,
      message: 'Something went wrong, Please try again later',
    }
  }
}

export async function requestPasswordReset(_: ActionResponse | null, formData: FormData): Promise<ActionResponse> {
  const email = formData.get('email') as string
  try {
    await auth.api.requestPasswordReset({
      body: {
        email,
        redirectTo: '/reset-password',
      },
    })
  } catch (error) {
    if (isAPIError(error)) {
      return { success: false, message: error.message }
    }
  }

  return { success: true, message: 'Check your inbox' }
}

export async function resetPassword(_: ActionResponse | null, formData: FormData): Promise<ActionResponse> {
  const newPassword = formData.get('newPassword') as string
  const confirmPassword = formData.get('confirmPassword') as string
  const token = formData.get('token') as string

  if (!newPassword || newPassword.length < 8) {
    return { success: false, message: 'Password must be at least 8 characters' }
  }
  if (newPassword !== confirmPassword) {
    return { success: false, message: 'Password does not match' }
  }

  try {
    await auth.api.resetPassword({
      body: {
        newPassword,
        token,
      },
    })
  } catch (error) {
    if (isAPIError(error)) {
      return { success: false, message: error.message }
    }
  }
  return { success: true, message: 'Password reset successfully!' }
}
export async function updateEmail(_: ActionResponse | null, formData: FormData): Promise<ActionResponse> {
  const newEmail = formData.get('newEmail') as string
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!newEmail || !emailRegex.test(newEmail)) {
    return { success: false, message: 'Invalid email address' }
  }
  try {
    await auth.api.changeEmail({
      body: {
        newEmail,
      },
    })
  } catch (error) {
    if (isAPIError(error)) {
      console.error('[updateEmail]: Unexpected error', error)
      return {
        success: false,
        message: error.message,
      }
    }
  }
  return {
    success: true,
    message: 'Verification email sent to the new email address',
  }
}

export async function signInWithGoogle(): Promise<ActionResponse> {
  let response: any
  try {
    response = await auth.api.signInSocial({
      body: {
        provider: 'google',
        callbackURL: '/profile',
      },
    })
    console.log('this res', response)
    if (!response.url) {
      return { success: false, message: 'Something went wrong, Please try again later' }
    }
  } catch (error) {
    if (isAPIError(error)) {
      return { success: false, message: error.message }
    }
    console.error('[signInWithGoogle] Unexpected error:', error)
    return {
      success: false,
      message: 'Something went wrong. Please try again later',
    }
  }

  redirect(response.url)
}

export async function signOut() {
  try {
    await auth.api.signOut({
      headers: await headers(),
    })
  } catch (error) {
    if (isAPIError(error)) {
      console.error('[signOut] Unexpected Error', error)
      return { success: false, message: error.message }
    }
  }

  redirect('/sign-in')
}
