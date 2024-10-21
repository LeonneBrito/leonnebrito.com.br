import { Metadata } from 'next'

import { experiences } from '@/constants/experiencies'

export const metadata: Metadata = {
  title: 'Sobre',
  alternates: {
    canonical: '/about',
  },
}

export default function About() {
  return (
    <>
      <h1 className="text-base font-bold leading-loose text-gray-800 text-pretty">
        Olá, novamente!
      </h1>
      <div className="text-pretty text-xs leading-loose">
        <p>
          Sou Leonne, engenheiro de software com mais de 5 anos de experiência
          em desenvolvimento e gestão de projetos diversos, nascido no Brasil.
          🇧🇷
        </p>
        <p>
          Minha jornada profissional começou há alguns anos e, desde então,
          venho constantemente aperfeiçoando minhas habilidades através da
          prática e do entusiasmo por criar soluções inovadoras.
        </p>
        <p>
          Sou apaixonado por arquiteturas de software, como microfrontends e
          sistemas monolíticos, além de tecnologias como React, Next.js e Vue.js
          para frontend, e React Native e Flutter para mobile. O que mais me
          motiva é o desafio de desenhar e implementar interfaces e sistemas
          eficientes.
        </p>
        <p>
          Quando não estou desenvolvendo, gosto de me aprofundar em novas
          tecnologias, jogos e passar bons momentos com minha família.
        </p>
      </div>
      <section className="mt-4 flex flex-col gap-4">
        <div className="flex flex-col gap-4 border-t border-solid border-gray-200 pt-4 md:flex-row">
          <h2 className="text-base font-bold leading-loose text-gray-800 text-pretty min-w-[15%]">
            Experiência
          </h2>
          <div className="flex-shrink grow basis-0 text-pretty text-xs leading-loose">
            {experiences.map((exp, index) => (
              <p key={index}>
                <span> - {exp.title}</span> na{' '}
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-1 font-bold underline decoration-gray-500 underline-offset-2 outline-gray-400 transition-colors duration-150 ease-linear hover:text-gray-800 hover:decoration-gray-800"
                >
                  {exp.company}
                </a>{' '}
                ({exp.period})
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-solid border-gray-200 pt-4 md:flex-row">
          <h2 className="text-base font-bold leading-loose text-gray-800 text-pretty min-w-[15%]">
            Projetos
          </h2>
          <div className="flex-shrink grow basis-0 text-pretty text-xs leading-loose">
            <p>
              - <span className="font-bold text-gray-700">Flagify:</span> Um
              aplicativo de gerenciamento de feature-flags para desenvolvedores.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
