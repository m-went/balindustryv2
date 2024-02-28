import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { register } from 'swiper/element/bundle'
import Navbar from '@/components/navbar/Navbar'

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
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
