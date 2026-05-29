import { beforeEach, describe, expect, it, vi } from 'vitest'

vi.mock('next/navigation', () => ({
  redirect: vi.fn(),
}))

vi.mock('next/headers', () => ({
  headers: vi.fn(() => ({})),
}))

vi.mock('@/auth/index', () => ({
  auth: {
    api: {
      signUpEmail: vi.fn(),
      signInEmail: vi.fn(),
      requestPasswordReset: vi.fn(),
      resetPassword: vi.fn(),
      changeEmail: vi.fn(),
      signInSocial: vi.fn(),
      signOut: vi.fn(),
      signInMagicLink: vi.fn(),
    },
  },
}))

beforeEach(() => {
  vi.clearAllMocks()
})

//-------------Imports---------------------//
import { redirect } from 'next/navigation'
import {
  requestPasswordReset,
  resetPassword,
  sendMagicLink,
  signInWithGoogle,
  signInWithPassword,
  signUp,
  updateEmail,
} from '@/actions/auth'
import { APIError } from 'better-auth/api'

import { auth } from '@/auth/index'

//--------------------------------------//
//--------------------------------------//
//--------------------------------------//
describe('Sign-Up', () => {
  const formData = new FormData()
  formData.append('name', 'Test User')
  formData.append('email', 'test01@email.com')
  formData.append('password', 'mystrongpassword')

  it('redirects to /sign-in on success', async () => {
    vi.mocked(auth.api.signUpEmail).mockResolvedValue({
      token: null,
      user: {
        id: 'randomid',
        name: 'Test User',
        email: 'test01@email.com',
        createdAt: new Date(),
        updatedAt: new Date(),
        emailVerified: false,
      },
    })
    await signUp(null, formData)
    expect(redirect).toHaveBeenCalledWith('/sign-in')
  })

  it('catches error on signUp, email already exists', async () => {
    vi.mocked(auth.api.signUpEmail).mockRejectedValue(
      new APIError('UNPROCESSABLE_ENTITY', {
        message: 'User already exists, Use another email.',
      }),
    )
    const res = await signUp(null, formData)

    expect(res).toEqual({
      success: false,
      message: 'User already exists, Use another email.',
    })
    expect(redirect).not.toHaveBeenCalled()
  })

  it('handles unexpected error on signUp', async () => {
    vi.mocked(auth.api.signUpEmail).mockRejectedValue(new Error('Something went wrong, Try again later'))

    const res = await signUp(null, formData)

    expect(res).toEqual({
      success: false,
      message: 'Something went wrong, Try again later',
    })
  })
})
describe('Sign-In With Email', () => {
  const formData = new FormData()
  formData.append('email', 'test01@email.com')
  formData.append('password', 'mystrongpassword')

  it('redirects to /profile on success', async () => {
    vi.mocked(auth.api.signInEmail).mockResolvedValue({
      redirect: false,
      token: 'some_token',
      user: {
        id: 'randomid',
        name: 'Test User',
        email: 'test01@email.com',
        createdAt: new Date(),
        updatedAt: new Date(),
        emailVerified: true,
      },
    })
    await signInWithPassword(null, formData)

    expect(redirect).toHaveBeenCalledWith('/profile')
  })
  it('catched error on signIn error', async () => {
    vi.mocked(auth.api.signInEmail).mockRejectedValue(
      new APIError('UNPROCESSABLE_ENTITY', {
        message: 'Invalid email or password',
      }),
    )
    const res = await signInWithPassword(null, formData)

    expect(res).toEqual({
      success: false,
      message: 'Invalid email or password',
    })
    expect(redirect).not.toHaveBeenCalled()
  })
  it('handles unexpected error on signIn', async () => {
    vi.mocked(auth.api.signInEmail).mockRejectedValue(new Error('Network Error'))
    const res = await signInWithPassword(null, formData)

    expect(res).toEqual({
      success: false,
      message: 'Something went wrong, Please try again later',
    })
  })
})
describe('Magic Link Sign-In', () => {
  const formData = new FormData()
  formData.append('email', 'test01@email.com')

  it('sends a magic link on success', async () => {
    vi.mocked(auth.api.signInMagicLink).mockResolvedValue({
      token: null,
      user: null,
    })
    const res = await sendMagicLink(null, formData)

    expect(auth.api.signInMagicLink).toHaveBeenCalledWith({
      body: {
        email: 'test01@email.com',
        callbackURL: '/',
        newUserCallbackURL: '/',
        errorCallbackURL: '/',
      },
      headers: {},
    })
    expect(res).toEqual({ success: true, message: 'Magic link is on its way' })
  })

  it('catches error when email is not recognized', async () => {
    vi.mocked(auth.api.signInMagicLink).mockRejectedValue(
      new APIError('NOT_FOUND', {
        message: "Sorry, we don't recognise that email",
      }),
    )
    const res = await sendMagicLink(null, formData)

    expect(auth.api.signInMagicLink).toHaveBeenCalledWith({
      body: {
        email: 'test01@email.com',
        callbackURL: '/',
        newUserCallbackURL: '/',
        errorCallbackURL: '/',
      },
      headers: expect.any(Object),
    })
    expect(res).toEqual({
      success: false,
      message: "Sorry, we don't recognise that email",
    })
  })

  it('handles unexpected error on sending magic link', async () => {
    vi.mocked(auth.api.signInMagicLink).mockRejectedValue(new Error('Network Error'))
    const res = await sendMagicLink(null, formData)

    expect(auth.api.signInMagicLink).toHaveBeenCalledWith({
      body: {
        email: 'test01@email.com',
        callbackURL: '/',
        newUserCallbackURL: '/',
        errorCallbackURL: '/',
      },
      headers: expect.any(Object),
    })
    expect(res).toEqual({
      success: false,
      message: 'Something went wrong, Please try again later',
    })
  })
})

describe('Request Password Reset', () => {
  const formData = new FormData()
  formData.append('email', 'test01@email.com')

  it('Returns success message on successful request', async () => {
    vi.mocked(auth.api.requestPasswordReset).mockResolvedValue(undefined as any)
    const res = await requestPasswordReset(null, formData)

    expect(auth.api.requestPasswordReset).toHaveBeenCalledWith({
      body: {
        email: 'test01@email.com',
        redirectTo: '/reset-password',
      },
    })
    expect(res).toEqual({ success: true, message: 'Check your inbox' })
  })

  it('catches error when email is not recognized', async () => {
    vi.mocked(auth.api.requestPasswordReset).mockRejectedValue(
      new APIError('NOT_FOUND', {
        message: 'We do not recognise that email',
      }),
    )
    const res = await requestPasswordReset(null, formData)

    expect(auth.api.requestPasswordReset).toHaveBeenCalledWith({
      body: {
        email: 'test01@email.com',
        redirectTo: '/reset-password',
      },
    })
    expect(res).toEqual({
      success: false,
      message: 'We do not recognise that email',
    })
  })

  it('handles unexpected error on request password reset', async () => {
    vi.mocked(auth.api.requestPasswordReset).mockRejectedValue(new Error('Network Error'))
    const res = await requestPasswordReset(null, formData)

    expect(auth.api.requestPasswordReset).toHaveBeenCalledWith({
      body: {
        email: 'test01@email.com',
        redirectTo: '/reset-password',
      },
    })
    expect(res).toEqual({ success: true, message: 'Check your inbox' })
  })
})

describe('Reset Password', () => {
  const newPassword = 'newpassword123'
  const token = 'mysafetoken'

  it('resets password successfully', async () => {
    vi.mocked(auth.api.resetPassword).mockResolvedValue({} as any)
    const formData = new FormData()
    formData.append('newPassword', newPassword)
    formData.append('confirmPassword', newPassword)
    formData.append('token', token)

    const res = await resetPassword(null, formData)

    expect(auth.api.resetPassword).toHaveBeenCalledWith({
      body: {
        newPassword,
        token,
      },
    })
    expect(res).toEqual({
      success: true,
      message: 'Password reset successfully!',
    })
  })

  it('returns error if password is too short', async () => {
    const shortPassword = 'short'
    const formData = new FormData()
    formData.append('newPassword', shortPassword)
    formData.append('confirmPassword', shortPassword)
    formData.append('token', token)
    const res = await resetPassword(null, formData)

    expect(auth.api.resetPassword).not.toHaveBeenCalled()
    expect(res).toEqual({
      success: false,
      message: 'Password must be at least 8 characters',
    })
  })

  it('returns error on reset password failure', async () => {
    vi.mocked(auth.api.resetPassword).mockRejectedValue(
      new APIError('UNPROCESSABLE_ENTITY', {
        message: 'Failed to reset password, Try again',
      }),
    )
    const formData = new FormData()
    formData.append('newPassword', newPassword)
    formData.append('confirmPassword', newPassword)
    formData.append('token', token)
    const res = await resetPassword(null, formData)

    expect(auth.api.resetPassword).toHaveBeenCalledWith({
      body: {
        newPassword,
        token,
      },
    })
    expect(res).toEqual({
      success: false,
      message: 'Failed to reset password, Try again',
    })
  })

  it('handles unexpected error on reset password', async () => {
    vi.mocked(auth.api.resetPassword).mockRejectedValue(
      new APIError('BAD_REQUEST', {
        message: 'Failed to reset password, Try again later',
      }),
    )
    const newPassword = 'newpassword123'
    const formData = new FormData()
    formData.append('newPassword', newPassword)
    formData.append('confirmPassword', newPassword)
    formData.append('token', token)
    const res = await resetPassword(null, formData)

    expect(auth.api.resetPassword).toHaveBeenCalledWith({
      body: {
        newPassword,
        token,
      },
    })
    expect(res).toEqual({
      success: false,
      message: 'Failed to reset password, Try again later',
    })
  })
})

describe('Sign-In With Google', () => {
  it('calls auth.api.signInSocial on success', async () => {
    vi.mocked(auth.api.signInSocial).mockResolvedValue({
      url: '/profile',
    } as any)
    await signInWithGoogle()

    expect(auth.api.signInSocial).toHaveBeenCalledWith({
      body: {
        provider: 'google',
        callbackURL: '/profile',
      },
    })
    expect(redirect).toHaveBeenCalledWith('/profile')
  })

  it('handles unexpected error on social sign-in', async () => {
    vi.mocked(auth.api.signInSocial).mockRejectedValue(new Error('Network Error'))
    const res = await signInWithGoogle()

    expect(auth.api.signInSocial).toHaveBeenCalledWith({
      body: {
        provider: 'google',
        callbackURL: '/profile',
      },
    })
    expect(res).toEqual({
      success: false,
      message: 'Something went wrong. Please try again later',
    })
  })
})

describe('Update Email', () => {
  const newEmail = 'new.test@example.com'
  const wrongEmail = 'new.email.com'

  it('sends verification email on successful update', async () => {
    vi.mocked(auth.api.changeEmail).mockResolvedValue(undefined as any)
    const formData = new FormData()
    formData.append('newEmail', newEmail)
    const res = await updateEmail(null, formData)

    expect(auth.api.changeEmail).toHaveBeenCalledWith({
      body: {
        newEmail,
      },
    })
    expect(res).toEqual({
      success: true,
      message: 'Verification email sent to the new email address',
    })
  })

  it('returns error for invalid email format', async () => {
    const formData = new FormData()
    formData.append('newEmail', wrongEmail)
    const res = await updateEmail(null, formData)

    expect(auth.api.changeEmail).not.toHaveBeenCalled()
    expect(res).toEqual({ success: false, message: 'Invalid email address' })
  })

  it('returns error on update email failure', async () => {
    vi.mocked(auth.api.changeEmail).mockRejectedValue(
      new APIError('UNPROCESSABLE_ENTITY', {
        message: 'This email is invalid',
      }),
    )
    const formData = new FormData()
    formData.append('newEmail', newEmail)
    const res = await updateEmail(null, formData)

    expect(auth.api.changeEmail).toHaveBeenCalledWith({
      body: {
        newEmail,
      },
    })
    expect(res).toEqual({
      success: false,
      message: 'This email is invalid',
    })
  })
})
