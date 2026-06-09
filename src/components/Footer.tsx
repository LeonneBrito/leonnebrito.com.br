export function Footer() {
  return (
    <footer className="relative mt-4 w-full px-3">
      <div className="flex flex-col gap-1 text-pretty text-sm leading-loose text-muted-foreground">
        <p className="italic">
          Technology is anything that wasn&apos;t around when you were born.
        </p>
        <p>© {new Date().getFullYear()} Leonne Brito. All rights reserved.</p>
      </div>
    </footer>
  )
}
