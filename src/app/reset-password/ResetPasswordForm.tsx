'use client'

import React from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { FaUnlock } from 'react-icons/fa'

export default function ResetPasswordForm() {
  return (
    <Card title="Reset Your Password" className="w-full max-w-md bg-base-100 shadow-2xl">
      <form>
        <div className="flex  justify-center mb-4">
          <div className="avatar placeholder">
            <div className="flex items-center justify-center bg-primary text-primary-content rounded-full w-20">
              <FaUnlock size={30} />
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <Input type="password" name="newPassword" placeholder="Type Your New Password" />
          <Input type="password" name="confirmPassword" placeholder="Confirm Your New Password" />
        </div>
        <Button color="primary" className="w-full my-10" type="submit">
          Reset Password
        </Button>
      </form>
    </Card>
  )
}
