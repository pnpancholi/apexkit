import type React from 'react'

const BUTTON_CLASSES = 'btn font-semibold transition-all rounded-none'

const BUTTON_COLORS = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  accent: 'btn-accent',
  success: 'btn-success',
  error: 'btn-error',
}

const BUTTON_SIZES = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
}

const BUTTON_VARIANTS = {
  regular: '',
  outlined: 'btn-outline',
}

type ButtonProps = React.ComponentProps<'button'> & {
  color?: keyof typeof BUTTON_COLORS
  variant?: keyof typeof BUTTON_VARIANTS
  size?: keyof typeof BUTTON_SIZES
  isLoading?: boolean
}

export default function Button({
  children,
  color = 'primary',
  variant = 'regular',
  size = 'md',
  isLoading = false,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={props.disabled || isLoading}
      className={`${BUTTON_CLASSES} ${BUTTON_SIZES[size]} ${BUTTON_VARIANTS[variant]} ${BUTTON_COLORS[color]} ${className}`}
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
