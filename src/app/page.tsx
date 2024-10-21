export default function Home() {
  return (
    <>
      <h1 className="text-base font-bold leading-loose text-gray-800 text-pretty">
        Olá, eu sou o Leonne!
      </h1>
      <div className="text-pretty text-xs leading-loose">
        <p>
          Sou desenvolvedor front-end e entusiasta de tecnologia. Atualmente
          trabalho na{' '}
          <a
            href="https://www.linkedin.com/company/semantix/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pretty underline"
          >
            Semantix
          </a>
          .
        </p>
        <p>
          Meu foco principal é em desenvolvimento web, com tecnologias como
          React, Next.js e Tailwind CSS.
        </p>
      </div>
    </>
  )
}
