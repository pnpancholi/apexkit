import type React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width: 'sm' | 'md' | 'lg'
  state?: 'success' | 'error' | 'warning'
  className?: string
  name: string
  disabled?: boolean
}

export default function Input({ width = 'md', state, className = '', disabled = false, ...props }: InputProps) {
  const baseClasses = 'input w-full rounded-none focus:outline-none focus:ring-0'

  const widthClasses = {
    sm: 'input-sm',
    md: 'input-md',
    lg: 'input-lg',
  }

  const stateClasses = {
    success: 'input-success',
    error: 'input-error',
    warning: 'input-warning',
  }

  return <input {...props} className={`${baseClasses} ${widthClasses[width]} ${state ? stateClasses[state] : ''} ${className}`} />
}
