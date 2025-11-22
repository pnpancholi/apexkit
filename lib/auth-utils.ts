import { auth } from "@/lib/auth";
import { Session } from "better-auth/types";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

/**
 * Get the current authenticated session
 * This is the core function that talks to Better Auth
 */
//export async function getSession() {
//  try {
//    const session = await auth.api.getSession({
//      headers: await headers(),
//    });
//    console.log("Session", session);
//    return session as AppSession | null;
//  } catch (error) {
//    console.error("Auth-Utils: failed to get session", error);
//    return null;
//  }
//}

export async function getUser() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    return session?.user || null;
  } catch (error) {
    console.error("Auth-Utils: failed to get session", error);
    return null;
  }
}

export async function requireAuth() {
  const user = await getUser();
  if (!user) {
    redirect("/sign-in");
  }
  return user;
}
