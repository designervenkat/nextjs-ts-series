"use client"
import React from 'react'
import { notFound } from 'next/navigation'

type Params = Promise<{
  productId: number;
}>



export default async function page({ params }: { params: Params }) {
  const { productId } = await params;

  if (productId > 1000) {

    notFound()

  }
  return (

    <div>

      <h2>Product : {productId}</h2>
    </div>
  )
}
