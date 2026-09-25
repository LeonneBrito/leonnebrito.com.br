import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: ReactNode
  children: ReactNode
}

/** Editorial row: heading in the 4-col margin, content in the 8-col measure. */
export function Section({ id, title, children }: SectionProps) {
  return (
    <section
      aria-labelledby={id}
      className="grid gap-x-8 gap-y-6 border-t py-10 md:grid-cols-12 md:py-16"
    >
      <h2
        id={id}
        className="text-balance text-lg font-medium leading-snug tracking-tight md:sticky md:top-8 md:col-span-4 md:self-start"
      >
        {title}
      </h2>
      <div className="min-w-0 md:col-span-8">{children}</div>
    </section>
  )
}
