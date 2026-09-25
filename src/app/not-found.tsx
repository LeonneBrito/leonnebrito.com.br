import { Metadata } from 'next'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

import { Section } from '@/components/Section'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('notFound')

  return { title: t('title'), robots: { index: false } }
}

export default async function NotFound() {
  const t = await getTranslations('notFound')

  return (
    <Section id="not-found-title" title={t('title')}>
      <div className="flex max-w-[62ch] flex-col gap-5 text-muted-foreground">
        <p>{t('description')}</p>
        <p>
          <Link href="/" className="link">
            {t('back')}
          </Link>
        </p>
      </div>
    </Section>
  )
}
