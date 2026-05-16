'use client'

import React from 'react'
import Button from '@/components/ui/Button'
import Modal from '@/components/layout/Modal'
import Input from '@/components/ui/Input'
import Alert from '@/components/ui/Alert'
import { updateEmail } from '@/actions/auth'

export default function UpdateEmail() {
  const [isOpen, setOpen] = React.useState(false)
  const [updateEmailState, updateEmailAction, isPending] = React.useActionState(updateEmail, null)
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        color="accent"
        variant="outlined"
        type="button"
        className="w-full mt-4"
      >
        Update Email
      </Button>
      <Modal isOpen={isOpen} onClose={() => setOpen(false)} title="Update Email ">
        <form action={updateEmailAction}>
          <div className="join w-full my-10">
            <Input
              type="email"
              placeholder="Enter your new email"
              className="grow join-item"
              name="newEmail"
              required
            />
            <Button type="submit" color="primary" className="join-item" isLoading={isPending}>
              Update
            </Button>
          </div>
          {updateEmailState && (
            <Alert
              type={updateEmailState.success ? 'success' : 'error'}
              message={updateEmailState.message}
            />
          )}
        </form>
      </Modal>
    </>
  )
}
