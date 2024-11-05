import Link from 'next/link'
import React from 'react'

export default function TeamPage() {
  return (
    <div>
      <div className='mb-4'>Team Section</div>

      <Link className="bg-slate-400 px-4 py-2 rounded text-slate-900 font-medium" href='/marketing-dashboard/admin-team'>Admin Team Section</Link>
    </div>
  )
}
