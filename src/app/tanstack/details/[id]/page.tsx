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
      <div className="h-screen grid items-start text-center text-slate-50 mt-20">
        Loading...
      </div>
    )

  if (isError)
    return (
      <div className="h-screen grid items-start text-center text-slate-50 mt-20">
        <p>Failed to load product: {error.message}</p>
      </div>
    )

  return (
    <div className="h-screen flex flex-col w-full max-w-screen-sm mx-auto mt-20">
      <div className="flex flex-col gap-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-medium text-slate-300">
            Product Detail Page - {id}
          </h2>
          <Link
            href="/tanstack"
            className="bg-slate-700 text-green-200 font-semibold px-8 py-4 rounded-md">
            Back to Products 👈🏻
          </Link>
        </div>
        <div className="bg-slate-800 p-20  text-slate-100 flex flex-col gap-y-4 text-xl">
          <h3>
            <span className="text-slate-500 mr-3">Product Name</span>
            {productDetail?.productName}
          </h3>
          <p>
            <span className="text-slate-500 mr-3"> Product Price </span>
            {productDetail?.productPrice}
          </p>
        </div>

        <div className=" mt-10 text-slate-100">
          <h2 className="mb-4">Comments</h2>
          <ul>
            <li
              className="bg-slate-700 p-8 my-4 rounded-md text-slate-200 font"
              key=""></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
