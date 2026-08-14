import { ArrowUpRight } from 'lucide-react'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

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
  const t = await getTranslations('portfolio')
  const tProjects = await getTranslations('projects')

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-pretty text-base font-medium leading-loose text-gray-900 dark:text-gray-100">
        {t('greeting')}
      </h2>
      <div className="flex flex-col gap-3">
        {projects.map((project) => (
          <a
            key={project.key}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-1 rounded-lg border border-border bg-card/50 p-4 transition-colors hover:border-gray-300 hover:bg-accent/50 dark:hover:border-gray-700"
          >
            <span className="flex items-center gap-1.5 text-sm font-medium text-gray-900 dark:text-gray-100">
              <project.icon className="h-4 w-4 shrink-0 text-muted-foreground" />
              {tProjects(`${project.key}.name`)}
              <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
            </span>
            <span className="text-sm leading-snug text-gray-600 dark:text-gray-400">
              {tProjects(`${project.key}.description`)}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
