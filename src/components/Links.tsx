import { Fragment } from 'react'

import { links } from '@/constants/links'

export function Links() {
  return (
    <section className="mt-4 flex">
      <div className="group relative flex h-fit w-full flex-col gap-3 px-3 py-6 border-y border-gray-200">
        <div className="grid grid-cols-2 sm:flex sm:gap-3 gap-4">
          {links.map((link, index) => (
            <Fragment key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-1 font-medium underline underline-offset-2 transition-colors duration-150 ease-linear flex items-center gap-1"
              >
                <link.icon className="inline-block w-4 h-4" />
                <span>{link.name}</span>
              </a>
              {index < links.length - 1 && (
                <span className="text-gray-300">•</span>
              )}
            </Fragment>
          ))}
          <div className="text-pretty text-sm leading-loose col-span-2 sm:col-auto">
            <p>
              Or let&apos;s talk via email:{' '}
              <a
                href="mailto:contato@leonnebrito.com.br"
                className="px-1 font-medium underline underline-offset-2 transition-colors duration-150 ease-linear"
              >
                contato@leonnebrito.com.br
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
