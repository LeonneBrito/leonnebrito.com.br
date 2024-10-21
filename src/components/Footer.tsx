export default function Footer() {
  return (
    <footer className="relative mt-4 w-full px-3">
      <div className="text-pretty text-xs leading-loose">
        <p>Technology is anything that wasn’t around when you were born.</p>
        <p>
          ©{''}
          {new Date().getFullYear()} Leonne Brito.
        </p>
      </div>
    </footer>
  )
}
