import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>


      <div className='mb-4'>Admin Team Section</div>

      <Link className="bg-slate-400 px-4 py-2 rounded text-slate-900 font-medium" href='/marketing-dashboard'> Team Section</Link>

    </div>
  )
}
