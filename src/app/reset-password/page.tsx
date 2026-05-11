'use client'

import ResetPasswordForm from './ResetPasswordForm'
import { resetPassword } from '@/actions/auth'

export default function ResetPasswordPage() {
  return (
    <div className="flex min-h-screen bg-base-200 justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <ResetPasswordForm />
      </div>
    </div>
  )
}
