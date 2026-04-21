import { auth } from '@/auth/index'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export async function getUser() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    })
    return session?.user || null
  } catch (error) {
    console.error('Auth-Utils: failed to get session', error)
    return null
  }
}

export async function requireAuth() {
  const user = await getUser()
  if (!user) {
    redirect('/sign-in')
  }
  return user
}
