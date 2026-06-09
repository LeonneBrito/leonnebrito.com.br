'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

import { ThemeSwitcher } from './ThemeSwitcher'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
]

export function Header() {
  const pathname = usePathname()

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
              {item.label}
            </Link>
          )
        })}
      </nav>
      <ThemeSwitcher />
    </header>
  )
}
