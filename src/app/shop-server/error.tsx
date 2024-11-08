'use client'

import { useEffect } from "react"

export default function error({ error }: { error: Error }) {
  
  useEffect(() => {
    console.log(error.message);    
  }, [error])
  
  return (
    <div className="bg-slate-900 text-red-300 h-screen grid place-content-center">Failed to fetch products..</div>
  )
}
