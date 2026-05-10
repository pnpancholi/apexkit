'use client'

import React from 'react'
import Button from '@/components/ui/Button'
import Modal from '@/components/layout/Modal'
import Input from '@/components/ui/Input'
import Alert from '@/components/ui/Alert'

export default function UpdateEmail() {
  const [isOpen, setOpen] = React.useState(false)

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
        <div className="join w-full my-10">
          <Input
            type="email"
            placeholder="Enter your new email"
            className="grow join-item"
            name="email"
            required
          />
          <Button type="button" color="primary" className="join-item">
            Update
          </Button>
        </div>
      </Modal>
    </>
  )
}
