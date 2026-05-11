import { FaCircleCheck, FaTriangleExclamation } from 'react-icons/fa6'

interface AlertProps {
  type: 'success' | 'error'
  message: string
}
export default function Alert({ type, message }: AlertProps) {
  const baseClasses = 'alert alert-soft gap-3 animate-fade-in rounded-none'
  const typeClasses = {
    success: 'alert-success bg-success/10 text-success-700',
    error: 'alert-error bg-error/10 text-error-700',
  }

  const icons = {
    success: <FaCircleCheck />,
    error: <FaTriangleExclamation />,
  }

  return (
    <div role="alert" className={`${baseClasses} ${typeClasses[type]}`}>
      {icons[type]}
      <p>{message}</p>
    </div>
  )
}
