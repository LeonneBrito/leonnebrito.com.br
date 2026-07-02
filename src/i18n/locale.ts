'use server'

import { cookies } from 'next/headers'

import { defaultLocale, Locale, localeCookieName, locales } from './config'

export async function getUserLocale(): Promise<Locale> {
  const value = cookies().get(localeCookieName)?.value

  if (value && locales.includes(value as Locale)) {
    return value as Locale
  }

  return defaultLocale
}

export async function setUserLocale(locale: Locale) {
  cookies().set(localeCookieName, locale)
}
