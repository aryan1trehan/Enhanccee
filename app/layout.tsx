import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Enhanccee - Elite Marketing & Growth Partner',
  description: 'Crafting brands that stand above the noise',
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


