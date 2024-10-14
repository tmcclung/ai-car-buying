import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Release - Faster, Cheaper DevOps. Ephemeral Environments',
  description: 'Create, manage, and scale on-demand environments in minutes. Empower developers, reduce DevOps costs, and accelerate your development workflow with Release.com.',
  keywords: 'ephemeral environments, development workflow, DevOps, cloud infrastructure, CI/CD, developer productivity, on-demand environments',
  openGraph: {
    title: 'Release - Faster, Cheaper DevOps. Ephemeral Environments',
    description: 'Create on-demand environments in minutes. Empower developers, reduce costs with Release.com.',
    url: 'https://release.com',
    siteName: 'Release.com',
    images: [
      {
        url: 'https://release.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Release.com - Ephemeral Environments',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Release - Faster, Cheaper DevOps. Ephemeral Environments',
    description: 'Create on-demand environments in minutes. Empower developers, reduce costs with Release.com.',
    images: ['https://release.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
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
