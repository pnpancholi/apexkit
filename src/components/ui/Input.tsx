import type React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: 'sm' | 'md' | 'lg'
  state?: 'success' | 'error' | 'warning'
  className?: string
  name: string
}

const BASE_CLASSES = 'input w-full rounded-none focus:outline-none focus:ring-0'

const WIDTH_CLASSES = {
  sm: 'input-sm',
  md: 'input-md',
  lg: 'input-lg',
}

const STATE_CLASSES = {
  success: 'input-success',
  error: 'input-error',
  warning: 'input-warning',
}

export default function Input({ width = 'md', state, className = '', ...props }: InputProps) {
  return <input {...props} className={`${BASE_CLASSES} ${WIDTH_CLASSES[width]} ${state ? STATE_CLASSES[state] : ''} ${className}`} />
}
