"use client";

import {useState} from "react";
import {auth} from "@/lib/auth";
import Link from "next/link";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [magicLink, setMagicLink] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailLogin = async (e: React.FormEvent) => {
    {/*side effects*/}
    e.preventDefault()
    setLoading(true);
  }

  const handleMagicLink = async (e: React.FormEvent) => {
    {/*side effects*/}
    e.preventDefault()
    setLoading(true);
  }
  
  console.log("email", email)
  return(
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title justify-center text-2xl">Sign In</h2>

        {/*Email and Password*/}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            className="input input-bordered w-full"
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            className="input input-bordered w-full"
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
          >
          {loading ? "Signing In..." : "Sign In"}
          </button>
          </form>
          <div className="divider">OR</div>

          {/*Magic Link */}
          <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            className="input input-bordered w-full"
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="btn btn-outline"
            disabled={loading}
          >Send Magic Link
          </button>
        </form>

        {/*Resetting*/}
        <div className="text-center text-sm space-y-1">
          <Link href="/forgot-password" className="link">Forgot Password ?</Link>
          <Link href="/sign-up" className="link">Need an account? Sign Up</Link>
        </div>
      </div>
    </div>
  )
}
