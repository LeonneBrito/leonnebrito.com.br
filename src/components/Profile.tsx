import { MapPin } from 'lucide-react'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

export async function Profile() {
  const t = await getTranslations('profile')

  return (
    <section className="animate-enter pb-12 pt-10 md:pb-16 md:pt-20">
      <h1
        translate="no"
        className="text-[clamp(3rem,11vw,7.5rem)] font-semibold leading-[0.92] tracking-[-0.045em]"
      >
        Leonne Brito
      </h1>

      <div className="mt-8 grid gap-x-8 gap-y-6 md:mt-12 md:grid-cols-12">
        <Image
          src="https://avatars.githubusercontent.com/u/73369138?v=4"
          alt="Leonne Brito"
          width={64}
          height={64}
          priority
          className="h-16 w-16 rounded-md object-cover ring-1 ring-foreground/10 md:col-span-4"
        />

        <div className="flex flex-col gap-4 md:col-span-8">
          <p className="max-w-[28ch] text-balance text-xl font-medium leading-snug tracking-tight md:text-2xl">
            {t('tagline')}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
            <li className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" aria-hidden />
              {t('location')}
            </li>
            <li className="inline-flex items-center gap-2">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand" />
              {t('available')}
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
