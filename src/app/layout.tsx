import { TanstackProvider } from '@/providers/tanstack-provider'
import './main.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: {
    default: 'Code Today!',
    template: '%s | CodeToday! HERE',
  },
  description: 'Learn code for anywhere',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-950">
        <Header />
        <TanstackProvider>{children}</TanstackProvider>
        {/* <Toaster position="bottom-center" />  */}
      </body>
    </html>
  )
}
