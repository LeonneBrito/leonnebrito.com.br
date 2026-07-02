'use client'

import { Languages } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Locale, locales } from '@/i18n/config'
import { setUserLocale } from '@/i18n/locale'

export function LanguageSwitcher() {
  const t = useTranslations('language')
  const activeLocale = useLocale()
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()

  function onSelect(locale: Locale) {
    if (locale === activeLocale) return

    startTransition(async () => {
      await setUserLocale(locale)
      router.refresh()
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          disabled={isPending}
          className="h-8 w-8 rounded-full text-muted-foreground hover:text-gray-900 dark:hover:text-gray-100"
        >
          <Languages className="h-[1.1rem] w-[1.1rem]" />
          <span className="sr-only">{t('toggle')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            className="flex items-center justify-between gap-4"
            onClick={() => onSelect(locale)}
          >
            <span>{t(locale)}</span>
            {locale === activeLocale && (
              <span className="h-1.5 w-1.5 rounded-full bg-gray-900 dark:bg-gray-100" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
