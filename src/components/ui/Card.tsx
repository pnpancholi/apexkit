import type React from 'react'

interface CardProps {
  icon?: React.ReactNode
  title?: string
  desc?: string
  children?: React.ReactNode
  className?: string
}
export default function Card({ icon, title, desc, className, children }: CardProps) {
  const baseClasses = 'card bg-base-300 shadow-2xl'
  const titleClasses = 'card-title text-xl mb-3'
  const descClasses = 'text-base-content/80'

  return (
    <div className={`${baseClasses} ${className}`}>
      <div className="card-body items-center text-center">
        {icon}
        {title && <h3 className={titleClasses}>{title}</h3>}
        {desc && <p className={descClasses}>{desc}</p>}
        {children}
      </div>
    </div>
  )
}
