import { ArrowUpRight } from 'lucide-react'
import { Metadata } from 'next'
import { getFormatter, getTranslations } from 'next-intl/server'

import { ExternalLink } from '@/components/ExternalLink'
import { Section } from '@/components/Section'
import { experiences } from '@/constants/experiencies'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata')

  return {
    title: t('aboutTitle'),
    alternates: {
      canonical: '/about',
    },
  }
}

export default async function About() {
  const [t, tRoles, format] = await Promise.all([
    getTranslations('about'),
    getTranslations('roles'),
    getFormatter(),
  ])

  function formatMonth(value: string) {
    return format.dateTime(new Date(`${value}-01T00:00:00`), {
      month: 'short',
      year: 'numeric',
    })
  }

  return (
    <>
      <Section id="about-title" title={t('greeting')}>
        <div className="flex max-w-[62ch] flex-col gap-5 text-pretty leading-relaxed text-muted-foreground">
          <p className="text-xl leading-snug text-foreground md:text-2xl">
            {t('bio1')}
          </p>
          <p>{t('bio2')}</p>
          <p>{t('bio3')}</p>
          <p>{t('bio4')}</p>
        </div>
      </Section>

      <Section id="experience-title" title={t('experienceTitle')}>
        <ol className="flex flex-col gap-6">
          {experiences.map((exp) => (
            <li
              key={`${exp.company}-${exp.start}`}
              className="grid gap-1 sm:grid-cols-[11rem_1fr] sm:gap-6"
            >
              <p className="pt-0.5 font-mono text-xs tabular-nums text-muted-foreground">
                <time dateTime={exp.start}>{formatMonth(exp.start)}</time>
                {' - '}
                {exp.end ? (
                  <time dateTime={exp.end}>{formatMonth(exp.end)}</time>
                ) : (
                  t('present')
                )}
              </p>
              <div className="flex flex-col gap-0.5">
                <ExternalLink
                  href={exp.link}
                  className="group inline-flex w-fit items-center gap-1 font-medium leading-snug"
                >
                  <span className="underline decoration-transparent decoration-1 underline-offset-[0.25em] transition-[text-decoration-color] duration-150 group-hover:decoration-brand">
                    {exp.company}
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className="h-3.5 w-3.5 text-muted-foreground transition-[color,transform] duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                  />
                </ExternalLink>
                <span className="text-sm leading-snug text-muted-foreground">
                  {tRoles(exp.role)}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </Section>
    </>
  )
}
