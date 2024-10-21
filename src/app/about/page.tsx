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
    <>
      <h1 className="text-base font-bold leading-loose text-gray-800 text-pretty">
        Hello, again!
      </h1>
      <div className="text-pretty text-xs leading-loose">
        <p>
          I’m Leonne, a software engineer with over 5 years of experience in
          development and project management, born in Brazil. 🇧🇷
        </p>
        <p>
          My professional journey started a few years ago, and since then, I
          have been constantly improving my skills through practice and my
          passion for creating innovative solutions.
        </p>
        <p>
          I’m passionate about software architectures like microfrontends and
          monolithic systems, as well as technologies like React, Next.js, and
          Vue.js for front-end, and React Native and Flutter for mobile. What
          drives me the most is the challenge of designing and implementing
          efficient interfaces and systems.
        </p>
        <p>
          When I&apos;m not developing, I enjoy diving into new technologies,
          gaming, and spending quality time with my family.
        </p>
      </div>
      <section className="mt-4 flex flex-col gap-4">
        <div className="flex flex-col gap-4 border-t border-solid border-gray-200 pt-4 md:flex-row">
          <h2 className="text-base font-bold leading-loose text-gray-800 text-pretty min-w-[15%]">
            Experience
          </h2>
          <div className="flex-shrink grow basis-0 text-pretty text-xs leading-loose">
            {experiences.map((exp, index) => (
              <p key={index}>
                <span> - {exp.title}</span> at{' '}
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
            Projects
          </h2>
          <div className="flex-shrink grow basis-0 text-pretty text-xs leading-loose">
            <p>
              - <span className="font-bold text-gray-700">Flagify:</span> A
              feature-flag management application for developers.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
