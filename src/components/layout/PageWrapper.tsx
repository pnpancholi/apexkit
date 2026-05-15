import type React from 'react'

interface PageWrapperProps {
  children: React.ReactNode
  className?: string
}

export default function PageWrapper({ children, className = '' }: PageWrapperProps) {
  const baseClasses = 'max-w-md mx-auto mt-36'

  return <main className={`${baseClasses} ${className}`}> {children}</main>
}
