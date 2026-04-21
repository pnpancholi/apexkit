import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getUser } from '@/auth/utils'

//For font awesome//
import { Inter } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

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
