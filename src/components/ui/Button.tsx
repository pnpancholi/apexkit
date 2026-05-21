import type React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  color?: 'primary' | 'secondary' | 'accent' | 'success' | 'error'
  variant?: 'regular' | 'outlined'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  disabled?: boolean
  className?: string
}

const BASE_CLASSES = 'btn font-semibold transiton-all rounded-none'

const COLOR_CLASSES = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  accent: 'btn-accent',
  success: 'btn-success',
  error: 'btn-error',
}

const SIZE_CLASSES = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
}

const VARIANT_CLASSES = {
  regular: '',
  outlined: 'btn-outline',
}

export default function Button({
  children,
  color = 'primary',
  variant = 'regular',
  size = 'md',
  isLoading = false,
  disabled = false,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={`${BASE_CLASSES} ${SIZE_CLASSES[size]} ${VARIANT_CLASSES[variant]} ${COLOR_CLASSES[color]} ${className}`}
    >
      {isLoading ? (
        <>
          <span className="loading loading-spinner"></span>
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  )
}
