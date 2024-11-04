export default function Home() {
  return (
    <>
      <h1 className="text-base font-medium leading-loose text-gray-800 text-pretty dark:text-gray-200">
        Hello, I&apos;m Leonne!
      </h1>
      <div className="text-pretty text-sm leading-loose">
        <p>
          I’m a front-end developer and technology enthusiast. I currently work
          at{' '}
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
          My main focus is on web development with technologies like React,
          Next.js, and Tailwind CSS.
        </p>
      </div>
    </>
  )
}
