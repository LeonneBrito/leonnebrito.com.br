import { ArrowUpRight } from 'lucide-react'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { ExternalLink } from '@/components/ExternalLink'
import { Section } from '@/components/Section'
import { projects } from '@/constants/projects'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata')

  return {
    title: t('portfolioTitle'),
    alternates: {
      canonical: '/portfolio',
    },
  }
}

export default async function Portfolio() {
  const [t, tProjects] = await Promise.all([
    getTranslations('portfolio'),
    getTranslations('projects'),
  ])

  return (
    <Section id="portfolio-title" title={t('greeting')}>
      <ul className="-mt-5 divide-y">
        {projects.map((project) => (
          <li key={project.key}>
            <ExternalLink
              href={project.link}
              className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-4 py-5"
            >
              <project.icon
                aria-hidden
                className="h-4 w-4 translate-y-0.5 self-start text-muted-foreground"
              />
              <span className="flex flex-col gap-1">
                <span className="text-lg font-medium leading-snug tracking-tight underline decoration-transparent decoration-1 underline-offset-[0.25em] transition-[text-decoration-color] duration-150 group-hover:decoration-brand">
                  {tProjects(`${project.key}.name`)}
                </span>
                <span className="max-w-[56ch] text-pretty leading-relaxed text-muted-foreground">
                  {tProjects(`${project.key}.description`)}
                </span>
              </span>
              <ArrowUpRight
                aria-hidden
                className="h-4 w-4 self-start text-muted-foreground transition-[color,transform] duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
              />
            </ExternalLink>
          </li>
        ))}
      </ul>
    </Section>
  )
}
