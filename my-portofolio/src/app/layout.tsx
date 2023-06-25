import './globals.css'
import { Inter } from 'next/font/google'
import TopIcon from '@/components/TopIcon'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ferdinand Portfolio',
  description: 'Ferdinand Portfolio made by Next.js, tailwind css, and framer-motion',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* <TopIcon /> */}
      </body>
    </html>
  )
}
