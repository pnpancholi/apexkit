import type React from 'react'

interface CardProps {
  icon?: React.ReactNode
  title?: string
  desc?: string
  children?: React.ReactNode
  className?: string
  hoverable?: boolean
}
export default function Card({
  icon,
  title,
  desc,
  className,
  children,
  hoverable = false,
}: CardProps) {
  const baseClasses =
    'card bg-base-300 shadow-xl border border-transparent rounded-none border-ring-2'
  const titleClasses = 'card-title text-xl mb-3'
  const descClasses = 'text-base-content/80'
  const hoverClasses = hoverable
    ? 'hover:shadow-2xl hover:border-primary hover:-translate-y-1 transition-all duration-300'
    : ''

  return (
    <div className={`${baseClasses} ${className} ${hoverClasses}`}>
      <div className="card-body items-center text-center">
        {icon}
        {title && <h3 className={titleClasses}>{title}</h3>}
        {desc && <p className={descClasses}>{desc}</p>}
        {children}
      </div>
    </div>
  )
}
