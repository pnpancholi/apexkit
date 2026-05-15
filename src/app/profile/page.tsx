import { requireAuth } from '@/auth/utils'
import ProfileDetails from './ProfileDetails'
import PageWrapper from '@/components/layout/PageWrapper'

export default async function Profile() {
  const user = await requireAuth()
  return (
    <PageWrapper>
      <ProfileDetails user={user} />
    </PageWrapper>
  )
}
