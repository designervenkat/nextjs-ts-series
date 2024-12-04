'use client'

import { Products } from '@/types/products-types'

import { useQuery } from '@tanstack/react-query'
import { getAllProducts } from '@/utils/products'
import Link from 'next/link'
import AddProduct from '@/components/AddProduct'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

export default function TanstackProducts() {
  const {
    isFetching,
    isPending: productLoading,
    isError: productError,
    data: products,
    isSuccess,
    refetch,
  } = useQuery<Products[]>({
    queryKey: ['products'], // useState
    queryFn: getAllProducts, // useEffect
    // gcTime: 300000, // milliseconds
    // staleTime: 30000, // by default it is zero
    // refetchOnMount: 'always',
    // refetchOnWindowFocus: 'always',

    // Polling
    // refetchInterval: 2000,
    // refetchIntervalInBackground: true,
    // enabled: false, // default true
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
      <AddProduct />

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
    </div>
  )
}
