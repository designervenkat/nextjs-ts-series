'use client'
import { Products } from '@/types/products-types'
import { fetchInfiniteScrollOne } from '@/utils/products'
import { useInfiniteQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'

export default function InfiniteScrollOne() {
  const { data, status, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['products'],
      queryFn: fetchInfiniteScrollOne,
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPage) => {
        return lastPage.length === 10 ? allPage.length + 1 : undefined
      },
    })

  console.log(data)

  // console.log(fetchNextPage, hasNextPage)

  const loadMoreData = () => {
    const bottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 10

    if (bottom && hasNextPage) {
      fetchNextPage()
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', loadMoreData)

    return () => window.removeEventListener('scroll', loadMoreData)
  }, [hasNextPage])

  return (
    <div className="h-screen grid justify-center w-full max-w-screen-sm mx-auto">
      <h1 className="text-xl text-slate-400 mb-10">Infinite Scroll One</h1>

      {data?.pages?.map((page, pageIndex) => (
        <div className="flex flex-1 flex-col gap-y-4 mb-4" key={pageIndex}>
          {page?.map((item: Products) => (
            <div
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
