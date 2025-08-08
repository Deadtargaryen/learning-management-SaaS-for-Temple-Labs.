import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ToastProvider } from '@/components/providers/toaster-provider'
import { ConfettiProvider } from '@/components/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LMS360 — Best Online Learning Platform for Courses & Training',
  description:
    'Create, manage, and deliver engaging online courses with our powerful LMS. Boost training, certifications, and learner success today.',
  keywords: 'LMS360, learning management system, online courses, e-learning, training software, employee training, certification platform',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'LMS360 — Best Online Learning Platform for Courses & Training',
    description:
      'Create, manage, and deliver engaging online courses with our powerful LMS. Boost training, certifications, and learner success today.',
    url: 'https://learning-management-saa-s-for-templ.vercel.app/',
    siteName: 'YourLMS',
    images: [
      {
        url: 'https://learning-management-saa-s-for-templ.vercel.app/',
        width: 1200,
        height: 630,
        alt: 'LMS360 Platform Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LMS — Best Online Learning Platform for Courses & Training',
    description:
      'Create, manage, and deliver engaging online courses with our powerful LMS. Boost training, certifications, and learner success today.',
    // images: ['https://yourlmswebsite.com/twitter-image.png'],
    creator: '@YourTwitterHandle',
  },
  authors: [{ name: 'T-Labs' }],
  themeColor: '#1a73e8',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider dynamic afterSignOutUrl="/">
      <html lang="en">
        <body className={inter.className}>
          <ConfettiProvider />
          <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
