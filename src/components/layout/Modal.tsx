import React from 'react'

interface ModalProps {
  title?: string
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

export default function Modal({ title = '', children }: ModalProps) {
  const backdropClasses = 'rounded-none shadow-xl backdrop:bg-black/50'
  const containerClasses = 'max-w-md w-full mx-4'
  const headerClasses = 'px-6 py-4 border-b border-base-200'
  const contentClasses = 'px-6 py-4'

  return (
    <dialog className={backdropClasses}>
      <div className={containerClasses}>
        {title && <div className={headerClasses}>{title}</div>}
        <div className={contentClasses}>{children}</div>
      </div>
    </dialog>
  )
}
