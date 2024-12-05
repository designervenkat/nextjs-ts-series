'use client'

import { Products } from '@/types/products-types'

import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { paginatedProducts } from '@/utils/products'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function PaginatedProducts() {
  const [page, setPage] = useState(1)

  const {
    isFetching,
    isPending: productLoading,
    isError: productError,
    data: products,
    isSuccess,
  } = useQuery<Products[]>({
    queryKey: ['products', page],
    queryFn: () => paginatedProducts(page),
    placeholderData: keepPreviousData,
  })

  useEffect(() => {
    if (isSuccess) {
      toast.success('Good Job!', {
        icon: '🚀',
      })
    }
    if (productError) {
      toast.error('Failed!')
    }
  }, [])

  console.log('Fetching :', isFetching, 'Loading :', productLoading)

  if (productError)
    return (
      <div className="grid place-content-center h-96 text-red-500">
        {productError}
      </div>
    )

  if (!products)
    return (
      <div className="text-slate-300 flex flex-col gap-y-4 h-96 items-center justify-center">
        NO Products
        {/* <button onClick={() => refetch()}> Fetch Data </button> */}
      </div>
    )

  return (
    <div className="flex flex-col gap-8 mx-auto w-full max-w-screen-md px-16">
      <h2 className="text-2xl text-green-400">Tanstack Fetching Products</h2>
      {/* <AddProduct />  */}

      {!productLoading && products ? (
        <div className="grid grid-cols-2 gap-4 place-content-center">
          {products.map((item) => (
            <Link href={`/tanstack/details/${item.id}`} key={item.id}>
              <div className="bg-gray-700 py-4 px-4 rounded-md text-slate-100">
                {item.productName} - {item.productPrice}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-slate-300 flex h-96 items-center justify-center">
          Product Loading...
        </div>
      )}

      <div className="flex gap-x-4 items-center justify-between mt-10">
        <button
          className={
            page === 1
              ? 'bg-gray-300 py-2 w-44 rounded-sm text-slate-500'
              : 'bg-orange-200 py-2 w-44 rounded-sm text-orange-800'
          }
          onClick={() => setPage((page) => page - 1)}
          disabled={page === 1}>
          Previous Page
        </button>
        <button
          className={
            page === 3
              ? 'bg-gray-300 py-2 w-44 rounded-sm text-slate-500'
              : 'bg-green-200 py-2 w-44 rounded-sm text-green-800'
          }
          disabled={page === 3}
          onClick={() => setPage((page) => page + 1)}>
          Next Page
        </button>
      </div>
    </div>
  )
}
