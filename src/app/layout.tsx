import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { TerminalProvider } from '@/hooks/useTerminal'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Terminal } from '@/components/Terminal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Leonne Brito',
    template: '%s | Leonne Brito',
  },
  robots: {
    index: true,
    follow: true,
  },
  description:
    'Building high-performance web applications with a focus on user experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body className="bg-[#7F7FD5] bg-app">
        <div className="z-10 relative h-screen p-20 flex items-center justify-center">
          <div className="bg-[#232135] overflow-hidden border border-[#72707D] w-full max-w-[1480px] aspect-video shadow-md shadow-black/20 rounded-lg grid grid-rows-layout">
            <TerminalProvider>
              <Header />
              <div className="h-full relative flex flex-col-reverse overflow-auto scrollbar-thin scrollbar-thumb-[#2B283B] scrollbar-track-transparent">
                <Terminal />
                <div className="h-full relative">{children}</div>
              </div>
              <Footer />
            </TerminalProvider>
          </div>
        </div>
      </body>
    </html>
  )
}
