import './globals.css'

import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Links } from '@/components/Links'
import { Profile } from '@/components/Profile'

import { ThemeProvider } from './providers'

export const dynamic = 'force-dynamic'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://leonnebrito.com.br'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Leonne Brito',
    template: '%s | Leonne Brito',
  },
  description: 'Frontend developer, enthusiast of web technologies.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased font-sans text-sm leading-loose text-gray-700 dark:text-gray-300 tracking-tight`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div
            aria-hidden
            className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[40dvh] bg-gradient-to-b from-gray-100/70 to-transparent dark:from-gray-900/40"
          />
          <div className="mx-auto my-[6dvh] flex max-w-full animate-fade-up flex-col gap-6 p-6 md:max-w-2xl">
            <Header />
            <Profile />
            <main>
              <section className="flex">
                <div className="relative flex h-fit w-full flex-col gap-3 px-3 py-6">
                  {children}
                </div>
              </section>
              <Links />
            </main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
