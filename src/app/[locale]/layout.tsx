import { getLocale } from 'next-intl/server'
import './main.css'
import Header from '@/components/Header'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale()

  return (
    <html lang={locale}>
      <body className="h-screen bg-slate-900 text-slate-400 grid place-content-center w-full gap-y-10">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
