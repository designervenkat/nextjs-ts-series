import { TanstackProvider } from '@/providers/tanstack-provider'
import './main.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: {
    default: 'Code Today!',
    template: '%s | CodeToday! HERE',
  },
  description: 'Learn code for anywhere',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-screen bg-slate-900 text-slate-400 grid items-start justify-center w-full py-20">
        <header className="flex w-full items-start ml-20 gap-x-4 mx-auto">
          <Link
            className="bg-orange-200 text-orange-700 font-semibold px-8 py-4 rounded-md"
            href="/product-cc">
            Regular Fetch
          </Link>
          <Link
            className="bg-sky-200 text-sky-700 font-semibold px-8 py-4 rounded-md"
            href="/product-sc">
            Server Fetch
          </Link>
          <Link
            className="bg-green-200 text-green-700 font-semibold px-8 py-4 rounded-md"
            href="/product-tanstack">
            Tanstack RQ
          </Link>
        </header>
        <TanstackProvider>
          <main>{children}</main>
        </TanstackProvider>
      </body>
    </html>
  )
}
