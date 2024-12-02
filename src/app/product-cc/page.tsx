'use client'

import { Products } from '@/types/products-types'
import { useEffect, useState } from 'react'

export default function ClientComponentProducts() {
  const [products, setProducts] = useState<Products[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState('')

  const getAllProducts = async () => {
    const res = await fetch(
      'https://672e2363229a881691ef1d2d.mockapi.io/productss'
    )

    if (!res.ok) {
      setProducts(null)
      setIsError('Failed to fetch products')
    }

    const data = await res.json()

    setProducts(data)
    setIsLoading(false)
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  if (isError)
    return (
      <div className="grid place-content-center h-96 text-red-500">
        {isError}
      </div>
    )

  return (
    <div className="flex flex-col gap-8 mx-auto w-full max-w-screen-md p-20">
      <h2 className="text-2xl text-orange-400">
        Client Component Fetching Products
      </h2>

      {!isLoading && products ? (
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
