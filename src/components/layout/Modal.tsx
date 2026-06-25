import React from 'react'

interface ModalProps {
  title?: string
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

// useEffect is intentional here — <dialog> requires imperative DOM methods
// (.showModal() and .close()) to function correctly as a modal with backdrop.
// This is not an anti-pattern; it's the correct way to control <dialog> in React.
// <dialog> is used over <div> for semantic correctness and accessibility.
// It provides native backdrop support, focus trapping, and ESC key handling.
// Screen readers understand it as a modal dialog out of the box.
const BASE_CLASSES = 'modal outline:none backdrop:bg-black/50 focus:border-none'
const CONTAINER_CLASSES = 'modal-box rounded-none shadow-xl max-w-md w-full mx-4'
const HEADER_CLASSES = 'capitalize py-2 border-b border-text-200 text-center text-lg font-semibold'

export default function Modal({ title = '', isOpen = false, onClose, children }: ModalProps) {
  const dialogRef = React.useRef<HTMLDialogElement>(null)

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) onClose()
  }

  React.useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal()
    } else {
      dialogRef.current?.close()
    }
  }, [isOpen])

  return (
    <dialog
      onClose={onClose}
      ref={dialogRef}
      onClick={handleBackdropClick}
      onKeyDown={(e) => e.key === 'Escape' && onClose()}
      className={BASE_CLASSES}
    >
      <div className={CONTAINER_CLASSES}>
        {title && <h2 className={HEADER_CLASSES}>{title}</h2>}
        <div>{children}</div>
      </div>
    </dialog>
  )
}
