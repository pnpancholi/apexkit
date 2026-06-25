import type React from 'react'

interface PageWrapperProps {
  children: React.ReactNode
  className?: string
}

const BASE_CLASSES = 'max-w-md mx-auto mt-36'
export default function PageWrapper({ children, className = '' }: PageWrapperProps) {
  return <main className={`${BASE_CLASSES} ${className}`}> {children}</main>
}
