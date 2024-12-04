'use client'

import { getSingleProduct } from '@/utils/products'
import { useQueries } from '@tanstack/react-query'

const products = [{ id: '1' }, { id: '2' }, { id: '3' }]

export default function DynamicParallelQueries() {
  const productQueries = useQueries({
    queries: products.map((item) => ({
      queryKey: ['products', item.id],
      queryFn: () => getSingleProduct(item.id),
    })),
  })

  console.log('Dynamic Queries :', productQueries)

  return <div className="text-slate-50"></div>
}
