import { toNextJsHandler } from 'better-auth/next-js'
import { auth } from '@/auth/index'

export const { GET, POST } = toNextJsHandler(auth)
