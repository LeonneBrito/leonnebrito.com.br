import { getTranslations } from 'next-intl/server'

export async function Footer() {
  const t = await getTranslations('footer')

  return (
    <footer className="animate-enter flex flex-col gap-2 border-t py-8 text-sm text-muted-foreground [--i:3] sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
      <p className="text-pretty italic">{t('quote')}</p>
      <p className="shrink-0 font-mono text-xs">
        {t('rights', { year: new Date().getFullYear() })}
      </p>
    </footer>
  )
}
