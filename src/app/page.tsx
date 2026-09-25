import { getTranslations } from 'next-intl/server'

import { ExternalLink } from '@/components/ExternalLink'
import { Section } from '@/components/Section'

export default async function Home() {
  const t = await getTranslations('home')

  return (
    <Section id="home-title" title={t('greeting')}>
      <div className="flex max-w-[62ch] flex-col gap-5 text-pretty leading-relaxed text-muted-foreground">
        <p className="text-xl leading-snug text-foreground md:text-2xl">
          {t.rich('intro', {
            current: (chunks) => (
              <ExternalLink href="https://stargrid.pro/" className="link">
                {chunks}
              </ExternalLink>
            ),
            company: (chunks) => (
              <ExternalLink href="https://www.mevo.com.br/" className="link">
                {chunks}
              </ExternalLink>
            ),
          })}
        </p>
        <p>{t('focus')}</p>
        <p>
          {t.rich('availability', {
            email: (chunks) => (
              <a href="mailto:britoleonne@gmail.com" className="link">
                {chunks}
              </a>
            ),
          })}
        </p>
      </div>
    </Section>
  )
}
