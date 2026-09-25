import './globals.css'

import { Analytics } from '@vercel/analytics/react'
import type { Metadata, Viewport } from 'next'
import {
  JetBrains_Mono as jetBrainsMono,
  Schibsted_Grotesk as schibstedGrotesk,
} from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages, getTranslations } from 'next-intl/server'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Links } from '@/components/Links'
import { Profile } from '@/components/Profile'

import { ThemeProvider } from './providers'

export const dynamic = 'force-dynamic'

const sans = schibstedGrotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const mono = jetBrainsMono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f7f6' },
    { media: '(prefers-color-scheme: dark)', color: '#121110' },
  ],
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata')

  return {
    metadataBase: new URL('https://leonnebrito.com.br'),
    alternates: {
      canonical: '/',
    },
    title: {
      default: t('title'),
      template: `%s | ${t('title')}`,
    },
    description: t('description'),
    openGraph: {
      type: 'website',
      url: '/',
      siteName: t('title'),
      title: t('title'),
      description: t('description'),
    },
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [locale, messages, t] = await Promise.all([
    getLocale(),
    getMessages(),
    getTranslations('a11y'),
  ])

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${sans.variable} ${mono.variable} font-sans text-base antialiased`}
      >
        {/* Only the namespaces used by client components are serialized. */}
        <NextIntlClientProvider
          locale={locale}
          messages={{
            nav: messages.nav,
            theme: messages.theme,
            language: messages.language,
          }}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <a href="#content" className="skip-link">
              {t('skip')}
            </a>
            <div className="mx-auto flex min-h-svh max-w-5xl flex-col px-5 sm:px-8">
              <Header />
              <Profile />
              <main id="content" tabIndex={-1} className="flex-1 outline-none">
                {children}
                <Links />
              </main>
              <Footer />
            </div>
            <Analytics />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
