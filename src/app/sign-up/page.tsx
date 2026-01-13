"use client";
import Link from "next/link";
import { useActionState } from "react";
import { signUp } from "@/lib/actions/auth";

export default function SignUp() {
  const [signUpState, signUpAction, signUpPending] = useActionState(
    signUp,
    null,
  );
  return (
    <div className="flex min-h-screen justify-center bg-base-200 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="card bg-base-100 shadow-2xl mt-25">
          <div className="card-body text-center">
            <h2 className="card-title justify-center test-2xl">
              Create Account
            </h2>
            <form className="space-y-4">
              <input
                className="input input-bordered w-full"
                placeholder="Full Name"
                type="name"
                name="name"
                required
              />
              <input
                className="input input-bordered w-full"
                placeholder="Email"
                type="email"
                name="email"
                required
              />
              <input
                className="input input-bordered w-full"
                placeholder="Password (6+ characters)"
                type="password"
                name="password"
                required
              />
              {signUpState?.success === false && (
                <div className="alert alert-error alert-soft">
                  {signUpState.message}
                </div>
              )}

              <button
                type="submit"
                formAction={signUpAction}
                className="btn btn-primary my-5"
                disabled={signUpPending}
              >
                {signUpPending ? "Creating Account" : "Create Account"}
              </button>
            </form>

            <div>
              <Link href="/sign-in" className="text-center text-sm">
                Already have an account ? Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
