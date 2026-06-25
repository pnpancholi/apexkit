import type React from 'react'

interface ProfileDetailsProps {
  label: string
  icon?: React.ReactNode
  children: React.ReactNode
}

const LABEL_CLASSES = 'text-base font-bold'

export default function ProfileField({ label = 'label', icon, children }: ProfileDetailsProps) {
  return (
    <div className="flex w-full items-center gap-8 p-5 my-4 rounded-none bg-base-200">
      <div className="text-2xl">{icon}</div>
      <div className="text-left">
        <p className={LABEL_CLASSES}>{label}</p>
        {children}
      </div>
    </div>
  )
}
