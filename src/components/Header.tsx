'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { cn } from '@/lib/utils'

import { LanguageSwitcher } from './LanguageSwitcher'
import { ThemeSwitcher } from './ThemeSwitcher'

const navItems = [
  { href: '/', key: 'home' },
  { href: '/about', key: 'about' },
] as const

export function Header() {
  const pathname = usePathname()
  const t = useTranslations('nav')

  return (
    <header className="sticky top-4 z-20 flex w-full items-center justify-between rounded-full border border-border/60 bg-background/70 px-2 py-1.5 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <nav className="flex items-center">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors',
                isActive
                  ? 'text-gray-900 dark:text-gray-100'
                  : 'text-muted-foreground hover:text-gray-900 dark:hover:text-gray-100',
              )}
            >
              {isActive && (
                <span className="absolute inset-0 -z-10 rounded-full bg-accent" />
              )}
              {t(item.key)}
            </Link>
          )
        })}
      </nav>
      <div className="flex items-center">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  )
}
