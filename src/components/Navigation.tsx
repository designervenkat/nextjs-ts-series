'use client'
import Link from 'next/link'
import { usePathname } from "next/navigation"


const navLinks = [
  { name: "Blog", href: "/blog" },
  { name: "About Us", href: "/about-us" },
  { name: "Dashboard", href: "/dashboard" }
]

export default function Navigation() {

  const path = usePathname()

  return (
    <div className='gap-x-3 mb-32 flex items-center justify-between'>

      {navLinks.map((item) => {
        
        const isActive = path.startsWith(item.href)

        return (
          <Link key={item.name} href={item.href}
          className={isActive ? "text-orange-400 underline" : ""}>
            {item.name}
          </Link>
        )
      })}

      
    </div>
  )
}
