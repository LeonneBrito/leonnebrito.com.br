import { getTranslations } from 'next-intl/server'
import type { ComponentProps } from 'react'

export async function ExternalLink({
  children,
  ...props
}: ComponentProps<'a'>) {
  const t = await getTranslations('a11y')

  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      <span className="sr-only"> {t('newTab')}</span>
    </a>
  )
}
