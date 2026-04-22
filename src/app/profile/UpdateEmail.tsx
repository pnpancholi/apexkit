'use client'
import { updateEmail } from '@/actions/auth'
import { useEffect, useState } from 'react'
import { Mail } from 'lucide-react'

export default function UpdateEmail() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [response, setResponse] = useState<{
    success: boolean
    message: string
  } | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // @dev: this takes care of providing a good user experience with modal
  // 1. Close on esc key
  useEffect(() => {
    const handleESCKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleESCKey)
    }
    return () => {
      document.removeEventListener('keydown', handleESCKey)
    }
  }, [isOpen])

  const handleBackdropClick = (e: React.MouseEvent | React.KeyboardEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false)
    }
  }

  const handleUpdateEmail = async () => {
    setIsLoading(true)
    const res = await updateEmail(email)
    if (res.success) {
      setResponse(res)
      setTimeout(() => {
        setIsOpen(false)
      }, 2000)
    }
    setResponse(res)
    setIsLoading(false)
  }
  return (
    <>
      <button
        className="btn btn-outline btn-primary w-full mt-4"
        type="button"
        onClick={() => {
          setIsOpen(true)
        }}
      >
        Update Email
      </button>
      {isOpen && (
        <dialog
          className={`modal ${isOpen ? 'modal-open' : ''}`}
          onClick={handleBackdropClick}
          onKeyDown={handleBackdropClick}
        >
          <div className="modal-box space-y-6 animate-in fade-in duration-300 space-y-6 min-h-[200px]">
            <div className="form-control">
              <h3 className="font-bold text-xl mb-10">Update Email</h3>
              <div className="join">
                <div>
                  <label className="input validator join-item">
                    <Mail />
                    <input
                      type="email"
                      placeholder="Enter your new email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </label>
                </div>
                <button
                  className={`btn join-item ${isLoading ? 'btn-disabled' : 'btn-primary'}`}
                  type="button"
                  onClick={handleUpdateEmail}
                >
                  {isLoading ? 'Updating...' : 'Update Email'}
                </button>
              </div>
              {response && (
                <p
                  className={`mt-4 p-2 rounded-lg  ${response.success ? 'bg-success/10 text-success' : 'bg-error/10 text-error'}`}
                >
                  {response.message}
                </p>
              )}
            </div>
          </div>
        </dialog>
      )}
    </>
  )
}
