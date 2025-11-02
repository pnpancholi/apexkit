"use client";

import {useState} from "react";
import {signUp} from "@/lib/auth-client";
import Link from "next/link";

export default function SignUp () {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signUp.email({name, email, password});
      alert("check your email");
      window.location.href = "sign-in";
    } catch(err) {
      alert("sign up failed");
    }
    setLoading(false);
  }
  return(
    <div className="card bg-base-350 w-90 shadow-xl">
      <div className="card-body">
        <h2 className="card-title justify-center test-2xl">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            className="input input-bordered w-full"
            placeholder="Full Name"
            value={name}
            type="name"
            onChange={e => setName(e.target.value)}
            required
          />
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
