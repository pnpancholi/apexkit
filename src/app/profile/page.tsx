import { requireAuth } from '@/auth/utils'

import { updateProfile, logOut } from './actions'

import UpdateEmail from './UpdateEmail'
export default async function Profile() {
  const user = await requireAuth()
  return (
    <div className="flex min-h-screen bg-base-200 justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body text-center">
            <form>
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
                    <input
                      className="input input-ghost w-full p-0 font-medium bg-transparent border-none focus:outline-none"
                      name="name"
                      defaultValue={user.name}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-base-200 rounded-lg">
                  <div className="text-2xl">📧</div>
                  <div className="text-left">
                    <p className="text-sm text-base-content/70">Email</p>
                    <input
                      className="input input-ghost w-full p-0 font-medium bg-transparent border-none focus:outline-none"
                      name="email"
                      disabled
                      defaultValue={user.email}
                      contentEditable={false}
                    />
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
                <button formAction={updateProfile} className="btn btn-primary w-full mt-4">
                  Update Profile
                </button>
                <button className="btn btn-accent w-full mt-4">Reset Password</button>
                <button formAction={logOut} className="btn btn-outline w-full mt-4">
                  Sign Out
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
