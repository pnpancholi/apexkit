"use client"
import { useActionState } from "react"
import { resetPassword } from "@/lib/actions/auth";

export default async function ResetPasswordPage() {
  const [resetPasswordState, resetPasswordAction, resetPasswordPending] = useActionState(resetPassword, null)
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
                    <span className="text-2xl font-bold">U</span>
                  </div>
                </div>
              </div>
              {/*Header Text */}
              <h2 className="text-3xl font-bold mb-2">
                Reset Your Password
              </h2>

              {/* User Info Cards */}
              <div className="space-y-4">
                <div className="flex flex-col items-center space-y-4 p-2  rounded-lg">
                  <input
                    className="input input-ghost w-full p-2 font-medium bg-base-200  focus:outline-none"
                    type="password"
                    placeholder="Type Your New Password"
                  />

                  <input
                    className="input input-ghost w-full p-2 font-medium bg-base-200 focus:outline-none"
                    type="password"
                    placeholder="Confirm Your New Password"
                  />
                </div>
              </div>

              {/* Action Button */}
              <div className="my-5">
                <button className="btn btn-primary w-full mt-4" disabled={resetPasswordPending} formAction={resetPasswordAction} >
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
