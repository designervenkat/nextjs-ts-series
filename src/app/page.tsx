"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";// client component
// import { redirect } from "next/navigation";// server component

export default function HomePage() {  
  const router = useRouter()

  const handleRedirect = () => {
    setTimeout(() => {
    router.push('/dashboard')
    // redirect('/dashboard') // use this in SC
    },1000)
  }

  return (
    <div>
      <h1>Welcome to NextJS Series!</h1>

      <Link className="mx-2 " href="/dashboard">Success</Link>
      <Link className="mx-2 " href="/about-us">Failure</Link>

      <button onClick={handleRedirect}>Redirect</button>
    </div>
  )
}

