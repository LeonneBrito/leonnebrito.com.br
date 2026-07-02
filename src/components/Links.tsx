import { Mail } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

import { links } from '@/constants/links'

export async function Links() {
  const t = await getTranslations('links')

  return (
    <section className="mt-4 flex">
      <div className="relative flex h-fit w-full flex-col gap-4 border-y border-border px-3 py-6">
        <div className="flex flex-wrap gap-2">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-accent hover:text-gray-900 dark:text-gray-300 dark:hover:border-gray-700 dark:hover:text-gray-100"
            >
              <link.icon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              <span>{link.name}</span>
            </a>
          ))}
        </div>
        <p className="inline-flex flex-wrap items-center gap-1 text-pretty text-sm leading-loose text-gray-600 dark:text-gray-400">
          <Mail className="h-4 w-4" />
          {t('emailPrompt')}{' '}
          <a
            href="mailto:contato@leonnebrito.com.br"
            className="link-underline font-medium text-gray-900 dark:text-gray-100"
          >
            contato@leonnebrito.com.br
          </a>
        </p>
      </div>
    </section>
  )
}
