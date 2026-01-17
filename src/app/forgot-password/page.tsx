"use client"
import { requestPasswordReset } from "@/actions/auth";
import { useActionState } from "react";
import { FileLock } from "lucide-react"

export default function ForgotPassword() {
  const [resetPasswordState, resetPasswordAction, resetPasswordPending] = useActionState(requestPasswordReset, null)

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
                    <FileLock />
                  </div>
                </div>
              </div>
              {/*Header Text */}
              <h2 className="text-3xl font-bold mb-2">
                Forgot Your Password ?
              </h2>

              {/* User Info Cards */}
              <div className="space-y-6">
                <input
                  className="input input-ghost w-full p-2 font-medium bg-base-300  mt-5 focus:outline-none"
                  name="email"
                  type="email"
                  placeholder="Enter Your Email"
                  required
                />
                {resetPasswordState && (
                  <>
                    {resetPasswordState?.success === false && (
                      <div className="alert alert-soft alert-error">
                        {resetPasswordState.message}
                      </div>

                    )}
                    {resetPasswordState?.success === true && (
                      <div className="alert alert-soft alert-success">
                        {resetPasswordState.message}
                      </div>
                    )}
                  </>
                )}
              </div>
              {/* Action Button */}
              <div className="my-5">
                <button className="btn btn-primary w-full mt-4" formAction={resetPasswordAction}>
                  Request Password Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
