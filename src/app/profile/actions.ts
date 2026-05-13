'use server'
import { eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { headers } from 'next/headers'
import { auth } from '@/auth/index'
import { db } from '@/db/index'
import { user } from '@/db/schema/auth'

export async function updateProfile(formData: FormData) {
  const name = formData.get('name') as string
  let userId: string | undefined
  console.log('userid', userId)
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    })
    if (!session?.user.id) {
      console.warn('Server Action (Update Profile): no user id provided')
      return
    }
    if (!db) {
      console.error('Server Action (Update Profile): missing db instance')
      return
    }
    await db.update(user).set({ name }).where(eq(user.id, session?.user.id))
    console.log('Server Action (Update Profile): Profile Updated')
    revalidatePath('/profile')
  } catch (error) {
    console.error('Server Action (Update Profile): ', error)
    return
  }
}

export async function logOut() {
  try {
    await auth.api.signOut({
      headers: await headers(),
    })
    revalidatePath('/profile')
  } catch (error) {
    console.error('Server Action (Log Out): ', error)
  }
}
