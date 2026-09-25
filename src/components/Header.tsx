'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { LanguageSwitcher } from './LanguageSwitcher'
import { ThemeSwitcher } from './ThemeSwitcher'

const navItems = [
  { href: '/', key: 'home' },
  { href: '/about', key: 'about' },
  { href: '/portfolio', key: 'portfolio' },
] as const

export function Header() {
  const pathname = usePathname()
  const t = useTranslations('nav')

  return (
    <header className="flex items-center justify-between gap-2 py-5">
      <nav aria-label={t('label')}>
        <ul className="-ml-1.5 flex sm:-ml-2 items-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
                className="relative inline-flex h-9 items-center px-1.5 text-sm sm:px-2 font-medium text-muted-foreground transition-colors duration-150 after:absolute after:inset-x-1.5 after:bottom-1 sm:after:inset-x-2 after:h-px after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-200 after:ease-out hover:text-foreground aria-[current=page]:text-foreground aria-[current=page]:after:scale-x-100"
              >
                {t(item.key)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="-mr-2 flex items-center">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  )
}
