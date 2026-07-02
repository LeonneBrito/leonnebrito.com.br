import { getTranslations } from 'next-intl/server'

export async function Footer() {
  const t = await getTranslations('footer')

  return (
    <footer className="relative mt-4 w-full px-3">
      <div className="flex flex-col gap-1 text-pretty text-sm leading-loose text-muted-foreground">
        <p className="italic">{t('quote')}</p>
        <p>{t('rights', { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  )
}
