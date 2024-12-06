'use client'
import { Products } from '@/types/products-types'
import { fetchInfiniteScrollTwo } from '@/utils/products'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export default function InfiniteScrollTwo() {
  const { ref, inView } = useInView()

  const { data, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['products'],
    queryFn: fetchInfiniteScrollTwo,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  })

  console.log(data)

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [fetchNextPage, inView])

  return (
    <div className="h-screen grid justify-center w-full max-w-screen-sm mx-auto">
      <h1 className="text-xl text-slate-400 mb-10">Infinite Scroll Two</h1>

      {data?.pages?.map((page, pageIndex) => (
        <div className="flex flex-1 flex-col gap-y-4 mb-4" key={pageIndex}>
          {page.data.map((item: Products) => (
            <div
              ref={ref}
              key={item.id}
              className="bg-slate-800 text-white p-4 flex flex-col gap-y-2 rounded-md">
              <h3>
                {item.productName} - {item.id}
              </h3>
              <p>{item.productDesc}</p>
              <p>Price: {item.productPrice}</p>
            </div>
          ))}
        </div>
      ))}

      {isFetchingNextPage && (
        <div className="flex items-center justify-center">
          <div className="h-10 w-10 border-t-4 border-green-300 rounded-full animate-spin " />
        </div>
      )}
    </div>
  )
}
