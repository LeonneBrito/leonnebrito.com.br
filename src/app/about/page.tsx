import { ArrowUpRight } from 'lucide-react'
import { Metadata } from 'next'

import { experiences } from '@/constants/experiencies'

export const metadata: Metadata = {
  title: 'About',
  alternates: {
    canonical: '/about',
  },
}

export default function About() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-pretty text-base font-medium leading-loose text-gray-900 dark:text-gray-100">
        Hello, again!
      </h2>
      <div className="flex flex-col gap-3 text-pretty text-sm leading-loose text-gray-600 dark:text-gray-400">
        <p>
          I&apos;m Leonne, a software engineer with over 5 years of experience
          in development and project management, born in Brazil. 🇧🇷
        </p>
        <p>
          My professional journey started a few years ago, and since then, I
          have been constantly improving my skills through practice and my
          passion for creating innovative solutions.
        </p>
        <p>
          As a fullstack developer, I&apos;m passionate about software
          architectures like microfrontends and monolithic systems. I work with
          React, Next.js, and Vue.js on the front-end, Node.js on the back-end,
          and React Native and Flutter for mobile. What drives me the most is
          the challenge of designing and implementing efficient interfaces and
          systems end to end.
        </p>
        <p>
          When I&apos;m not developing, I enjoy diving into new technologies,
          gaming, and spending quality time with my family.
        </p>
      </div>

      <section className="mt-6 flex flex-col gap-3">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Experience
        </h3>
        <ol className="relative flex flex-col border-l border-border">
          {experiences.map((exp, index) => (
            <li key={index} className="group relative pb-5 pl-5 last:pb-0">
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border border-border bg-background transition-colors group-hover:border-gray-900 group-hover:bg-gray-900 dark:group-hover:border-gray-100 dark:group-hover:bg-gray-100" />
              <div className="flex flex-col gap-0.5">
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-1 text-sm font-medium leading-snug text-gray-900 transition-colors hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-400"
                >
                  {exp.company}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
                <span className="text-sm leading-snug text-gray-600 dark:text-gray-400">
                  {exp.title}
                </span>
                <span className="text-xs leading-snug text-muted-foreground">
                  {exp.period}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-4 flex flex-col gap-3">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Projects
        </h3>
        <a
          href="#"
          className="group flex flex-col gap-1 rounded-lg border border-border bg-card/50 p-4 transition-colors hover:border-gray-300 hover:bg-accent/50 dark:hover:border-gray-700"
        >
          <span className="flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-gray-100">
            Flagify
            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
          </span>
          <span className="text-sm leading-snug text-gray-600 dark:text-gray-400">
            A feature-flag management application for developers.
          </span>
        </a>
      </section>
    </div>
  )
}
