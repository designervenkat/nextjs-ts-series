'use client'

import { Products } from '@/types/products-types'

import { useQuery } from '@tanstack/react-query'
import { getAllProducts } from '@/utils/products'
import Link from 'next/link'

export default function TanstackProducts() {
  const {
    isFetching,
    isPending: productLoading,
    isError: productError,
    data: products,
  } = useQuery<Products[]>({
    queryKey: ['products'], // useState
    queryFn: async () => getAllProducts(), // useEffect
    // gcTime: 300000, // milliseconds
    // staleTime: 30000, // by default it is zero
    // refetchOnMount: 'always',
    // refetchOnWindowFocus: 'always',
  })

  console.log('Fetching :', isFetching, 'Loading :', productLoading)

  if (productError)
    return (
      <div className="grid place-content-center h-96 text-red-500">
        {productError}
      </div>
    )

  return (
    <div className="flex flex-col gap-8 mx-auto w-full max-w-screen-md p-20">
      <h2 className="text-2xl text-green-400">Tanstack Fetching Products</h2>

      {!productLoading && products ? (
        <div className="grid grid-cols-2 gap-4 place-content-center">
          {products.map((item) => (
            <Link href={`/product-tanstack/details/${item.id}`} key={item.id}>
              <div className="bg-gray-700 py-4 px-4 rounded-md">
                {item.productName} - {item.productPrice}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="grid place-content-center h-96">Product Loading...</div>
      )}
    </div>
  )
}
