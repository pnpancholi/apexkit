"use client";

import {useState} from "react";
import {auth} from "@/lib/auth";
import Link from "next/link";

export default function SignUp () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return(
    <div className="card bg-base-350 w-90 shadow-xl">
      <div className="card-body">
        <h2 className="card-title justify-center test-2xl">Create Account</h2>
        <form className="space-y-4">
          <input 
            className="input input-bordered w-full"
            placeholder="Email"
            value={email}
            type="email"
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input 
            className="input input-bordered w-full"
            placeholder="Password (6+ characters)"
            value={password}
            type="password"
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
          >{loading? "Creating Account..." : "Create Account"}</button>
        </form>

        <div>
          <Link href="/sign-in" className="text-center text-sm">Already have an account ? Sign In</Link>
        </div>
      </div>
    </div>
  )
}
