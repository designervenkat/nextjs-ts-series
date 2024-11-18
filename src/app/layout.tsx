import './main.css'

import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`h-screen bg-slate-900 text-slate-400 grid place-content-center w-full`}>
        <main>{children}</main>
      </body>
    </html>
  )
}
