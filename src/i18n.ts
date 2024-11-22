import { getRequestConfig } from 'next-intl/server'

const routing = {
  locales: ['en', 'fr'],
  defaultLocale: 'en',
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  // ensure that the incoming locale is valid
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  }
})
