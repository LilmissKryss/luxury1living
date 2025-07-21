import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Luxury 1 Living • Pure Luxury, Perfectly Cleaned',
  description: 'Premium commercial cleaning services that consistently exceed expectations, with meticulous attention to detail, creating spotless and welcoming spaces.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
