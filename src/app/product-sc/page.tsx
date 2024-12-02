import { Products } from '@/types/products-types'
import { getAllProducts } from '@/utils/products'
import { Suspense } from 'react'

export default async function ProductServerComponent() {
  const products: Products[] = await getAllProducts()

  return (
    <div className="grid items-start justify-center p-20">
      <h2 className="text-xl text-blue-300">
        Server Component Fetching Products
      </h2>

      <Suspense
        fallback={
          <div className="grid place-content-center h-96">
            Product Loading...
          </div>
        }>
        <div className="grid grid-cols-2 gap-4 place-content-center mt-20">
          {products.map((item) => (
            <div className="bg-gray-700 py-4 px-4 rounded-md" key={item.id}>
              {item.productName} - {item.productPrice}
            </div>
          ))}
        </div>
      </Suspense>
    </div>
  )
}
