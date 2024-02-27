import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { register } from 'swiper/element/bundle'

register()
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BALIndustry',
  description: 'Innowacyjne rozwiązania CNC',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
