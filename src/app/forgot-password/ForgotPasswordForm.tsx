'use client'

import React from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Alert from '@/components/ui/Alert'
import { FaEnvelope } from 'react-icons/fa6'
import { requestPasswordReset } from '@/actions/auth'

export default function ForgotPasswordForm() {
  const [resetPasswordState, resetPasswordAction, resetPasswordPending] = React.useActionState(requestPasswordReset, null)

  return (
    <Card title="Forgot Password ?">
      <form action={resetPasswordAction} className="space-y-4">
        <div className="bg-primary text-primary-content rounded-full w-20 h-20 flex items-center justify-center my-4 mb-10 mx-auto">
          <FaEnvelope size={30} />
        </div>
        <Input type="email" name="email" placeholder="Enter your email" required />
        {resetPasswordState && <Alert type={resetPasswordState.success ? 'success' : 'error'} message={resetPasswordState.message} />}
        <Button type="submit" color="primary" className="w-full mt-4" isLoading={resetPasswordPending}>
          Request Password Reset
        </Button>
      </form>
    </Card>
  )
}
