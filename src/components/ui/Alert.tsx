import { FaCircleCheck, FaTriangleExclamation } from 'react-icons/fa6'

interface AlertProps {
  type: 'success' | 'error'
  message: string
}

const BASE_CLASSES = 'alert alert-soft gap-3 animate-fade-in rounded-none'
const TYPE_CLASSES = {
  success: 'alert-success bg-success/10 text-success-700',
  error: 'alert-error bg-error/10 text-error-700',
}

const ICONS = {
  success: <FaCircleCheck />,
  error: <FaTriangleExclamation />,
}

export default function Alert({ type, message }: AlertProps) {
  return (
    <div role="alert" className={`${BASE_CLASSES} ${TYPE_CLASSES[type]}`}>
      {ICONS[type]}
      <p>{message}</p>
    </div>
  )
}
