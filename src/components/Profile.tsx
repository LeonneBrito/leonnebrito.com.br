import { MapPin } from 'lucide-react'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

export async function Profile() {
  const t = await getTranslations('profile')

  return (
    <section className="flex flex-col items-start gap-4 px-3 sm:flex-row sm:items-center">
      <div className="relative shrink-0">
        <Image
          src="https://avatars.githubusercontent.com/u/73369138?v=4"
          alt="Leonne Brito"
          width={64}
          height={64}
          priority
          className="h-16 w-16 rounded-full object-cover shadow-sm ring-1 ring-black/5 dark:ring-white/10"
        />
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-semibold leading-tight tracking-tight text-gray-900 dark:text-gray-100">
          Leonne Brito
        </h1>
        <p className="text-sm leading-snug text-muted-foreground">
          {t('tagline')}
        </p>
        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {t('location')}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-medium text-emerald-700 dark:text-emerald-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            {t('available')}
          </span>
        </div>
      </div>
    </section>
  )
}
