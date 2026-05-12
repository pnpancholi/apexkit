import { requireAuth } from '@/auth/utils'
import ProfileDetails from './ProfileDetails'

export default async function Profile() {
  const user = await requireAuth()
  return (
    <div className="max-w-md mx-auto mt-36">
      <ProfileDetails user={user} />
    </div>
  )
}
