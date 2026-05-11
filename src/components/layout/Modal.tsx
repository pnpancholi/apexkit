import React from 'react'

interface ModalProps {
  title?: string
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

// why use effect, simple dep, no race condition, no async, why dialog//
export default function Modal({ title = '', isOpen = false, onClose, children }: ModalProps) {
  const baseClasses = 'modal outline:none backdrop:bg-black/50 focus:border-none'
  const containerClasses = 'modal-box rounded-none shadow-xl max-w-md w-full mx-4'
  const headerClasses = 'capitalize py-2 border-b border-text-200 text-center text-lg font-semibold'
  const contentClasses = ''

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
    <dialog onClose={onClose} ref={dialogRef} onClick={handleBackdropClick} className={baseClasses}>
      <div className={containerClasses}>
        {title && <h2 className={headerClasses}>{title}</h2>}
        <div className={contentClasses}>{children}</div>
      </div>
    </dialog>
  )
}
