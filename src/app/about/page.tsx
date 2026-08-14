import { ArrowUpRight } from 'lucide-react'
import { Metadata } from 'next'
import { getFormatter, getTranslations } from 'next-intl/server'

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
  const t = await getTranslations('about')
  const tRoles = await getTranslations('roles')
  const format = await getFormatter()

  function formatMonth(value: string) {
    return format.dateTime(new Date(`${value}-01T00:00:00`), {
      month: 'short',
      year: 'numeric',
    })
  }

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-pretty text-base font-medium leading-loose text-gray-900 dark:text-gray-100">
        {t('greeting')}
      </h2>
      <div className="flex flex-col gap-3 text-pretty text-sm leading-loose text-gray-600 dark:text-gray-400">
        <p>{t('bio1')}</p>
        <p>{t('bio2')}</p>
        <p>{t('bio3')}</p>
        <p>{t('bio4')}</p>
      </div>

      <section className="mt-6 flex flex-col gap-3">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          {t('experienceTitle')}
        </h3>
        <ol className="relative flex flex-col border-l border-border">
          {experiences.map((exp, index) => (
            <li key={index} className="group relative pb-5 pl-5 last:pb-0">
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border border-border bg-background transition-colors group-hover:border-gray-900 group-hover:bg-gray-900 dark:group-hover:border-gray-100 dark:group-hover:bg-gray-100" />
              <div className="flex flex-col gap-0.5">
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-1 text-sm font-medium leading-snug text-gray-900 transition-colors hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-400"
                >
                  {exp.company}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
                <span className="text-sm leading-snug text-gray-600 dark:text-gray-400">
                  {tRoles(exp.role)}
                </span>
                <span className="text-xs leading-snug text-muted-foreground">
                  {formatMonth(exp.start)} -{' '}
                  {exp.end ? formatMonth(exp.end) : t('present')}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}
