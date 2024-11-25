'use server'

import { Product } from '@/types/products'
import { revalidateTag } from 'next/cache'

export const addProduct = async (formData: FormData) => {
  const productName = formData.get('title')?.toString()
  const productPrice = formData.get('price')?.toString()
  const productDesc = formData.get('desc')?.toString()

  if (!productName || !productDesc || !productPrice) return

  const newProduct: Product = {
    productName,
    productPrice,
    productDesc,
  }

  const res = await fetch(
    'https://672e2363229a881691ef1d2d.mockapi.io/products',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    }
  )

  revalidateTag('products')
  return res.json()
}
