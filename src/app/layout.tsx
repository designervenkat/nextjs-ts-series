import './styles.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-screen bg-slate-900 text-slate-400 w-full mx-auto max-w-screen-xl p-10 flex items-center flex-col justify-start">
        {children}
      </body>
    </html>
  )
}