import { getTranslations } from 'next-intl/server'

export default async function Home() {
  const t = await getTranslations('home')

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-pretty text-base font-medium leading-loose text-gray-900 dark:text-gray-100">
        {t('greeting')}
      </h2>
      <div className="flex flex-col gap-3 text-pretty text-sm leading-loose text-gray-600 dark:text-gray-400">
        <p>
          {t.rich('intro', {
            company: (chunks) => (
              <a
                href="https://www.mevo.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-medium text-gray-900 dark:text-gray-100"
              >
                {chunks}
              </a>
            ),
          })}
        </p>
        <p>{t('focus')}</p>
        <p>
          {t.rich('availability', {
            email: (chunks) => (
              <a
                href="mailto:contato@leonnebrito.com.br"
                className="link-underline font-medium text-gray-900 dark:text-gray-100"
              >
                {chunks}
              </a>
            ),
          })}
        </p>
      </div>
    </div>
  )
}
