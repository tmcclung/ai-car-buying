import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TED Car Buying Inc. | AI-Powered Car Buying Service',
  description: 'Let our AI assistant handle the stress of car buying. Find your perfect car, negotiate the best price, and have it delivered to your door.',
  icons: {
    icon: [
      { url: '/car-logo-favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/car-logo-favicon.png', type: 'image/png' },
    ]
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2563eb',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
