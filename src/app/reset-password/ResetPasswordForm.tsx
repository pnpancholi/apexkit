'use client'

import React from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Alert from '@/components/ui/Alert'
import { FaUnlock } from 'react-icons/fa'
import { resetPassword } from '@/actions/auth'

interface ResetPasswordFormProps {
  token?: string
}

export default function ResetPasswordForm({ token }: ResetPasswordFormProps) {
  const [resetState, resetAction, resetPending] = React.useActionState(resetPassword, null)

  return (
    <Card title="Reset Your Password">
      <form action={resetAction} className="space-y-4">
        <div className="bg-primary text-primary-content rounded-full w-20 h-20 flex items-center justify-center my-4 mb-10 mx-auto">
          <FaUnlock size={30} />
        </div>
        <Input type="password" name="newPassword" placeholder="Type Your New Password" />
        <Input type="password" name="confirmPassword" placeholder="Confirm Your New Password" />
        <input type="hidden" name="token" value={token} />
        {resetState?.message && <Alert type={resetState.success ? 'success' : 'error'} message={resetState.message} />}
        <Button color="primary" className="w-full mt-4" type="submit" isLoading={resetPending}>
          Reset Password
        </Button>
      </form>
    </Card>
  )
}
