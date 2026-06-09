export default function Home() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-pretty text-base font-medium leading-loose text-gray-900 dark:text-gray-100">
        Hello, I&apos;m Leonne!
      </h2>
      <div className="flex flex-col gap-3 text-pretty text-sm leading-loose text-gray-600 dark:text-gray-400">
        <p>
          I&apos;m a fullstack developer and technology enthusiast. I currently
          work at{' '}
          <a
            href="https://www.mevo.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline font-medium text-gray-900 dark:text-gray-100"
          >
            Mevo
          </a>
          .
        </p>
        <p>
          My main focus is on web development with technologies like React,
          Next.js, Node.js, and Tailwind CSS.
        </p>
      </div>
    </div>
  )
}
