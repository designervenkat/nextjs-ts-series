"use client"

import Link from 'next/link'
import {use} from 'react'

function getRandomNum(num: number) {
  return Math.floor(Math.random() * num)
}

export default  function Reviews(
  { params }: { params: Promise<{ productId: string, reviewId: string }>, }) {

  const { productId, reviewId } = use(params)

  const random = getRandomNum(2)

  if (random === 1) {
    throw new Error("Errow loading review")
  }


  return (
    <div className='h-screen grid place-content-center'>
      <h1 className='text-4xl'>Review {reviewId} for product {productId}</h1>

      <Link className="bg-green-200 text-green-800 text-xs px-8 py-2 w-40 my-5 rounded-sm" href={`/products/10?name=Macbook&storage=16gb&color=SpaceGray`}>Product Details</Link>
    </div>
  )
}
