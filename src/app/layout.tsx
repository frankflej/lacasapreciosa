import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import Providers from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'La Perla Negra',
  description: 'Where the tranquility meets endless beauty',
  icons: {
    icon: '/assets/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
