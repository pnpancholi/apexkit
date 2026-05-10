interface InputProps {
  size?: 'sm' | 'md' | 'lg'
  state?: 'success' | 'error' | 'warning'
  className?: string
  type?: 'text' | 'email' | 'password'
  name: string
  required?: boolean
  placeholder: string
}

export default function Input({
  size = 'md',
  state,
  className = '',
  type = 'text',
  name,
  required = false,
  placeholder,
  ...props
}: InputProps) {
  const baseClasses = 'input w-full rounded-none focus:outline-none focus:ring-0'

  const sizeClasses = {
    sm: 'input-sm',
    md: 'input-md',
    lg: 'input-lg',
  }

  const stateClasses = {
    success: 'input-success',
    error: 'input-error',
    warning: 'input-warning',
  }

  return (
    <input
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      className={`${baseClasses} ${sizeClasses[size]} ${state ? stateClasses[state] : ''} ${className}`}
      {...props}
    />
  )
}
