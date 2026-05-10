'use client'

import { RectangleEllipsis } from 'lucide-react'
import { useState } from 'react'
import { resetPassword } from '@/actions/auth'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Card from '@/components/ui/Card'
import Alert from '@/components/Alert'



export default function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [feedback, setFeedback] = useState<{
    success: boolean
    message: string
  } | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleResetPassword = async () => {
    const params = new URLSearchParams(window.location.search)
    const token = params.get('token') as string
    setIsLoading(true)
    if (newPassword !== confirmPassword) {
      setFeedback({ success: false, message: 'Passwords do not match' })
      setIsLoading(false)
      return
    }
    if (newPassword.length < 8) {
      setFeedback({
        success: false,
        message: 'Password must be at least 8 character',
      })
      setIsLoading(false)
      return
    }
    try {
      const res = await resetPassword(newPassword, token)

      if (res.success && res.success === true) {
        setFeedback({
          success: true,
          message: 'Password reset successfully, Redirecting...',
        })
        setTimeout(() => {
          window.location.href = '/sign-in'
        }, 3000)
      } else {
        setFeedback({
          success: false,
          message: 'Failed to reset password, Try again',
        })
      }
    } catch (error) {
      console.error('Unexpected Error: ', error)
      setFeedback({
        success: false,
        message: 'Something went wrong, Please try again later!',
      })
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className="flex min-h-screen bg-base-200 justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Card title="Reset Your Password" className="w-full max-w-md bg-base-100 shadow-2xl">
          <form action={handleResetPassword}>
            {/* Profile Avatar */}
            <div className="flex  justify-center mb-4">
              <div className="avatar placeholder">
                <div className="flex items-center justify-center bg-primary text-primary-content rounded-full w-20">
                  <RectangleEllipsis />
                </div>
              </div>
            </div>
            {/* User Info Cards */}
            <div className="space-y-4">
              <Input
                type="password"
                name="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Type Your New Password"
              />

              <Input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Your New Password"
              />
            </div>
            {feedback && (
              <Alert
                type={feedback.success ? 'success' : 'error'}
                message={feedback.message}
              />
            )}
            {/* Action Button */}
            <div className="my-5">
              <Button color="primary" className="w-full mt-4" type="submit" isLoading={isLoading}>
                {isLoading ? 'Resetting Password...' : 'Reset Password'}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}
