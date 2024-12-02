'use client'

import { Products } from '@/types/products-types'

import { useQuery } from '@tanstack/react-query'
import { getAllProducts } from '@/utils/products'

export default function TanstackProducts() {
  const {
    isLoading: productLoading,
    isError: productError,
    data: products,
  } = useQuery<Products[]>({
    queryKey: ['products'], // useState
    queryFn: async () => getAllProducts(), // useEffect
  })

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
            <div className="bg-gray-700 py-4 px-4 rounded-md" key={item.id}>
              {item.productName} - {item.productPrice}
            </div>
          ))}
        </div>
      ) : (
        <div className="grid place-content-center h-96">Product Loading...</div>
      )}
    </div>
  )
}
