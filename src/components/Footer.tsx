export default function Footer() {
  return (
    <footer className="relative mt-4 w-full px-3">
      <div className="text-pretty text-xs leading-loose">
        <p>
          Tecnologia é qualquer coisa que não estava por aí quando você nasceu.
        </p>
        <p>
          ©{''}
          {new Date().getFullYear()} Leonne Brito.
        </p>
      </div>
    </footer>
  )
}
