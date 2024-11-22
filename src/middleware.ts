import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  // list all of the locales
  locales: ['fr', 'en'],
  defaultLocale: 'en',
})

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/(fr|en)/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ], // Exclude api, static, image, favicon
}
