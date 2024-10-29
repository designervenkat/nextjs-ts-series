import './main.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: "Code Today!",    
    template: "%s | CodeToday! HERE"
  },
  description: 'Learn code for anywhere',
}

// name of page | website


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-screen grid place-content-center w-full"> 
       
        <main>
            {children}
        </main>
     
      </body>
    </html>
  )
}
