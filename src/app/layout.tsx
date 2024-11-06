
import './main.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: "Code Today!",    
    template: "%s | CodeToday! HERE"
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
      <body className="h-screen bg-slate-900 text-slate-400 grid place-content-center w-full"> 
       
      
        <main>
            {children}
        </main>
     
      </body>
    </html>
  )
}
