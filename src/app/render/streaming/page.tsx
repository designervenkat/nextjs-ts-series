import Analytics from '@/components/Analytics'
import Loading from '@/components/Loading'
import Reports from '@/components/Reports'
import { Suspense } from 'react'


export default function StreamingPage() {
  return (
    <div className='grid grid-cols-4 h-screen w-full p-10'>
      <h2 className='col-span-4 text-center text-2xl'>Streaming Page</h2>

      <Suspense fallback={<Loading/>}>
        <div className='col-span-2 grid place-content-center  bg-slate-700 h-[720px]'>
          <Reports />
        </div>
      </Suspense>

      <Suspense fallback={<Loading/>}>
        <div className='col-span-2 grid place-content-center h-[720px] bg-slate-800'>
          <Analytics />
        </div>
      </Suspense>
    </div>
  )
}
