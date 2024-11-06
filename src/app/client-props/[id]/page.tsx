'use client'

import { useSearchParams } from 'next/navigation'
 



export default function Page({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {

  console.log(searchParams);
  

  const searchProps = useSearchParams()
  
   const name = searchProps.get('name')
   const color = searchProps.get('color')
  
  // const { id } = await params
  
  return (
    <div>
      Client Component Props - {name} - {color}
    </div>
  )
}
