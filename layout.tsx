import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Brew & Bites Social',
  description: 'Find your flavor. A small space for matcha people and cookie people.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
