import { ArrowUpRight } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

import { links } from '@/constants/links'

import { ExternalLink } from './ExternalLink'
import { Section } from './Section'

export async function Links() {
  const t = await getTranslations('links')

  return (
    <div className="animate-enter [--i:2]">
      <Section id="contact-title" title={t('title')}>
        <div className="flex flex-col gap-5">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map((link) => (
              <li key={link.url}>
                <ExternalLink
                  href={link.url}
                  className="group inline-flex items-center gap-2 font-medium"
                >
                  <link.icon
                    aria-hidden
                    className="h-4 w-4 text-muted-foreground transition-colors duration-150 group-hover:text-foreground"
                  />
                  {link.name}
                  <ArrowUpRight
                    aria-hidden
                    className="h-3.5 w-3.5 text-muted-foreground transition-[color,transform] duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                  />
                </ExternalLink>
              </li>
            ))}
          </ul>
          <p className="text-pretty text-muted-foreground">
            {t('emailPrompt')}{' '}
            <a
              href="mailto:britoleonne@gmail.com"
              className="link break-all sm:break-normal"
            >
              britoleonne@gmail.com
            </a>
          </p>
        </div>
      </Section>
    </div>
  )
}
