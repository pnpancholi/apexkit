"use client";

import { useState } from "react";
import { signIn } from "@/lib/auth-client";
import Link from "next/link";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [magicLink, setMagicLink] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data, error } = await signIn.email({ email, password });
      window.location.href = "/";
      console.log(data);
      console.log(error);
    } catch (err) {
      alert("Sign In Failed!!!");
    }
    setLoading(false);
  };

  const handleMagicLink = async (e: React.FormEvent) => {
    {
      /*side effects*/
    }
    e.preventDefault();
    setLoading(false);
  };

  console.log("email", email);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="card-title justify-center text-2xl">Sign In</h2>

        {/*Email and Password*/}
        <form onSubmit={handleEmailLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            className="input input-bordered w-full"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            className="input input-bordered w-full"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary" disabled={loading}>
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
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-outline" disabled={loading}>
            Send Magic Link
          </button>
        </form>

        {/*Resetting*/}
        <div className="text-center text-sm space-y-1">
          <Link href="/forgot-password" className="link">
            Forgot Password ?
          </Link>
          <Link href="/sign-up" className="link">
            Need an account? Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
