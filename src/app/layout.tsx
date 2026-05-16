import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { getUser } from '@/auth/utils'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import '@fortawesome/fontawesome-svg-core/styles.css'

export const dynamic = 'force-dynamic' // this is to deal with next build that has issues with auth headers
config.autoAddCss = false

const jMono = JetBrains_Mono({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'ApexKit',
  description: 'The blazing fast tool to help you build your next billion dollar, unicorn company',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const user = await getUser()
  return (
    <html lang="en" className="h-full">
      <body className={`${jMono.className}  h-full overscroll-y-none`}>
        <Navbar user={user} />
        <div className="flex flex-col min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
