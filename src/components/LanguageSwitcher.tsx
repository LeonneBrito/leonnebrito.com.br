'use client'

import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { useTransition } from 'react'

import { Locale, locales } from '@/i18n/config'
import { setUserLocale } from '@/i18n/locale'

export function LanguageSwitcher() {
  const t = useTranslations('language')
  const activeLocale = useLocale()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  function onSelect(locale: Locale) {
    if (locale === activeLocale) return

    startTransition(async () => {
      await setUserLocale(locale)
      router.refresh()
    })
  }

  return (
    <div
      role="group"
      aria-label={t('toggle')}
      aria-busy={isPending}
      className="flex items-center font-mono text-xs uppercase"
    >
      {locales.map((locale) => (
        <button
          key={locale}
          type="button"
          lang={locale}
          aria-pressed={locale === activeLocale}
          disabled={isPending}
          onClick={() => onSelect(locale)}
          className="inline-flex h-9 min-w-8 items-center justify-center rounded-md px-1.5 text-muted-foreground transition-[color,transform] duration-150 hover:text-foreground active:scale-[0.97] disabled:cursor-wait aria-pressed:text-foreground aria-pressed:underline aria-pressed:decoration-brand aria-pressed:underline-offset-4"
        >
          <span aria-hidden>{locale}</span>
          <span className="sr-only">{t(locale)}</span>
        </button>
      ))}
    </div>
  )
}
