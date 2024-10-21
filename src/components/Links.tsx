import { Fragment } from 'react'

import { links } from '@/constants/links'

export default function Links() {
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
                className="px-1 font-bold underline decoration-gray-500 underline-offset-2 outline-gray-400 transition-colors duration-150 ease-linear hover:text-gray-800 hover:decoration-gray-800"
              >
                <span>{link.name}</span>
              </a>
              {index < links.length - 1 && (
                <span className="hidden sm:inline mx-2">•</span>
              )}
            </Fragment>
          ))}
          <div className="text-pretty text-xs leading-loose col-span-2 sm:col-auto">
            <p>
              Ou falamos por email:{' '}
              <a
                href="mailto:contato@leonnebrito.com.br"
                className="px-1 font-bold underline decoration-gray-500 underline-offset-2 outline-gray-400 transition-colors duration-150 ease-linear hover:text-gray-800 hover:decoration-gray-800"
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
