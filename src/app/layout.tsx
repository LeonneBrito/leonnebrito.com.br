import './globals.css'

import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Links } from '@/components/Links'

import { ThemeProvider } from './providers'

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
        className={`${inter.className} antialiased font-sans text-sm leading-loose dark:text-gray-300 tracking-tighter`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="mx-auto my-[6dvh] flex max-w-full flex-col gap-3 p-6 md:max-w-2xl">
            <Header />
            <main>
              <section className="flex">
                <div className="group relative flex h-fit w-full flex-col gap-3 px-3 py-6">
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
