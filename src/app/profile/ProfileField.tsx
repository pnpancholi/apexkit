import type React from 'react'

interface ProfileDetailsProps {
  label: string
  icon?: React.ReactNode
  children: React.ReactNode
}

export default function ProfileField({ label = 'label', icon, children }: ProfileDetailsProps) {
  const labelClasses = 'text-base font-bold'

  return (
    <div className="flex items-center gap-8 p-5 my-4 rounded-none bg-base-200">
      <div className="text-2xl">{icon}</div>
      <div className="text-left">
        <p className={labelClasses}>{label}</p>
        {children}
      </div>
    </div>
  )
}
