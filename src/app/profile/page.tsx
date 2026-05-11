import { requireAuth } from '@/auth/utils'
import { logOut, updateProfile } from './actions'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Link from 'next/link'
import Card from '@/components/ui/Card'
import UpdateEmail from './UpdateEmail'

export default async function Profile() {
  const user = await requireAuth()
  return (
    <div className="flex min-h-screen bg-base-200 justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Card className="w-full max-w-md bg-base-100 shadow-2xl">
          <form action={updateProfile}>
            {/* Profile Avatar */}
            <div className="flex  justify-center mb-4">
              <div className="avatar placeholder">
                <div className="flex items-center justify-center bg-primary text-primary-content rounded-full w-20">
                  <span className="text-2xl font-bold">{user.name?.charAt(0).toUpperCase()}</span>
                </div>
              </div>
            </div>

            {/* Welcome with Name */}
            <h2 className="text-3xl font-bold mb-2">
              Welcome,
              <p> {user.name}!</p>
            </h2>

            {/* User Info Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-base-200 rounded-lg">
                <div className="text-2xl">👤</div>
                <div className="text-left">
                  <p className="text-sm text-base-content/70">Name</p>
                  <Input name="name" placeholder={user.name} />
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-base-200 rounded-lg">
                <div className="text-2xl">📧</div>
                <div className="text-left">
                  <p className="text-sm text-base-content/70">Email</p>
                  <Input disabled name="email" placeholder={user.email} />
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-base-200 rounded-lg">
                <div className="text-2xl">{user.emailVerified ? '✅' : '⏳'}</div>
                <div className="text-left">
                  <p className="text-sm text-base-content/70">Email Verification</p>
                  <p
                    className={`font-medium ${user.emailVerified ? 'text-success' : 'text-warning'}`}
                  >
                    {user.emailVerified ? 'Verified' : 'Pending Verification'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-base-200 rounded-lg">
                <div className="text-2xl">📅</div>
                <div className="text-left">
                  <p className="text-sm text-base-content/70">Member since</p>
                  <p className="font-medium">
                    {new Date(user.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            </div>

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
              <Button type="button" onClick={logOut} variant="outlined" className="w-full mt-4">
                Sign Out
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}
