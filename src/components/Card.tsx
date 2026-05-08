import type React from 'react'

interface CardProps {
  icon?: React.ReactNode
  title: string
  desc?: string
  className?: string
}
export default function Card({ icon, title, desc, className }: CardProps) {
  const baseClasses =
    'card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:translate-y-1'
  const titleClasses = 'card-title text-xl mb-3'
  const descClasses = 'text-base-content/80'

  return (
    <div className={`${baseClasses} ${className}`}>
      <div className="card-body items-center text-center">
        {icon}
        <h3 className={titleClasses}>{title}</h3>
        <p className={descClasses}>{desc}</p>
      </div>
    </div>
  )
}
