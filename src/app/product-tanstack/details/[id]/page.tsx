'use client'

import { getSingleProduct } from '@/utils/products'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function DetailPage() {
  const { id } = useParams<{ id: string }>()

  const {
    data: productDetail,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['products', id],
    queryFn: () => getSingleProduct(id),
  })

  if (isPending)
    return (
      <div className="h-screen grid place-content-center"> Loading... </div>
    )

  if (isError)
    return (
      <div className="h-screen grid place-content-center">
        <p>Failed to load product: {error.message}</p>
      </div>
    )

  return (
    <div className="grid place-content-center gap-y-8 h-screen w-full mx-auto max-w-screen-lg">
      <h2>Detail Page - {id}</h2>
      <div className="bg-slate-800 p-20 mt-10 text-slate-100 flex flex-col gap-y-4">
        <h3>{productDetail?.productName}</h3>
        <p>Price: {productDetail?.productPrice}</p>
      </div>
      <Link
        href="/product-tanstack"
        className="mt-10 bg-green-200 text-green-700 font-semibold px-8 py-4 rounded-md">
        Tanstack Products 👈🏻
      </Link>
    </div>
  )
}
