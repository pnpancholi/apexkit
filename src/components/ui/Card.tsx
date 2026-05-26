import type React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  title?: string
  desc?: string
  children?: React.ReactNode
  className?: string
  hoverable?: boolean
}
const BASE_CLASSES = 'card w-full bg-base-300 shadow-xl border border-transparent rounded-none'
const TITLE_CLASSES = 'card-title text-xl mb-3'
const DESC_CLASSES = 'text-base-content/80'
const HOVERCLASSES = 'hover:shadow-2xl hover:border-primary hover:-translate-y-1 transition-all duration-300'

export default function Card({ icon, title, desc, className, children, hoverable = false, ...props }: CardProps) {
  return (
    <section className={`${BASE_CLASSES} ${hoverable && HOVERCLASSES} ${className}`} {...props} aria-label={props['aria-label'] ?? 'card'}>
      <div className="card-body items-center text-center">
        {icon && <div aria-hidden="true">{icon}</div>}
        {title && <h3 className={TITLE_CLASSES}>{title}</h3>}
        {desc && <p className={DESC_CLASSES}>{desc}</p>}
        {children}
      </div>
    </section>
  )
}

Card.displayName = 'Card'
