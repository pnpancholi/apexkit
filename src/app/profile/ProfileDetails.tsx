'use client'

import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import UpdateEmail from './UpdateEmail'
import ProfileField from './ProfileField'
import Link from 'next/link'
import { FaUser, FaEnvelope, FaClipboardCheck, FaHourglassHalf, FaCalendar } from 'react-icons/fa'

import type { User } from '@/types'

interface ProfileDetailsProps {
  user: User
}

export default function ProfileDetails({ user }: ProfileDetailsProps) {
  return (
    <Card className="w-full max-w-md bg-base-100 shadow-2xl">
      <form>
        <div className="bg-primary text-primary-content rounded-full w-20 h-20 flex items-center justify-center my-4 mb-10 mx-auto">
          <span className="text-5xl font-bold">{user.name?.charAt(0).toUpperCase()}</span>
        </div>

        <h2 className="text-3xl font-bold mb-2">
          Welcome,
          <p> {user.name}!</p>
        </h2>

        <ProfileField label="Name" icon={<FaUser />}>
          {user.name}
        </ProfileField>
        <ProfileField label="Email" icon={<FaEnvelope />}>
          {user.email}
        </ProfileField>
        <ProfileField label="Verified" icon={user.emailVerified ? <FaClipboardCheck /> : <FaHourglassHalf />}>
          {user.emailVerified ? 'Verified' : 'Pending'}
        </ProfileField>
        <ProfileField label="Member Since" icon={<FaCalendar />}>
          {user.createdAt.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </ProfileField>

        {/* Action Button */}
        <div className="my-5">
          <UpdateEmail />
          <Button type="submit" className="w-full mt-4">
            Update Profile
          </Button>
          <Link href="/reset-password">
            <Button type="button" color="accent" className="w-full mt-4">
              Reset Password
            </Button>
          </Link>
          {/* <Button type="button" onClick={logOut} variant="outlined" className="w-full mt-4"> */}
          {/*   Sign Out */}
          {/* </Button> */}
        </div>
      </form>
    </Card>
  )
}
