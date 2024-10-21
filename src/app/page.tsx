export default function Home() {
  return (
    <>
      <h1 className="text-base font-bold leading-loose text-gray-800 text-pretty">
        Hello, I&apos;m Leonne!
      </h1>
      <div className="text-pretty text-xs leading-loose">
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
