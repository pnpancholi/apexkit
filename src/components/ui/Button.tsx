import type React from 'react'

interface ButtonProps {
  children: React.ReactNode
  color?: 'primary' | 'secondary' | 'accent' | 'success' | 'error'
  variant?: 'regular' | 'outlined'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  type: 'button' | 'submit' | 'reset'
  className?: string
}

export default function Button({
  children,
  color = 'primary',
  variant = 'regular',
  size = 'md',
  type = 'button',
  isLoading = false,
  disabled = false,
  onClick,
  className = '',
}: ButtonProps) {
  const baseClasses = 'btn font-semibold transiton-all rounded-none'

  const colorClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    success: 'btn-success',
    error: 'btn-error',
  }
  const sizeClasses = {
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
  }

  const variantClasses = {
    regular: 'btn',
    outlined: 'btn-outline',
  }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${colorClasses[color]} ${className}`}
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
