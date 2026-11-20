import type React from 'react'

const INPUT_CLASSES = 'input w-full rounded-none focus:outline-none focus:ring-0'

const INPUT_SIZES = {
  sm: 'input-sm',
  md: 'input-md',
  lg: 'input-lg',
}

const INPUT_STATES = {
  success: 'input-success',
  error: 'input-error',
  warning: 'input-warning',
}

type InputProps = Omit<React.ComponentProps<'input'>, 'size'> & {
  size?: keyof typeof INPUT_SIZES
  state?: keyof typeof INPUT_STATES
}

export default function Input({
  size = 'md',
  state,
  className = '',
  ...props
}: InputProps) {
  return (
    <input
      {...props}
      className={`${INPUT_CLASSES} ${INPUT_SIZES[size]} ${state ? INPUT_STATES[state] : ''} ${className}`}
    />
  )
}
