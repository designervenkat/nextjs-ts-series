'use client'

import { addProduct } from '@/actions/productsAction'
import { useTransition } from 'react'

function TransButton() {
  const [isPending, startTransition] = useTransition()

  const formData = new FormData()
  formData.append('title', 'Samsung')
  formData.append('price', '9009')
  formData.append('desc', 'This is Samsung')

  return (
    <button
      className="bg-blue-600 text-white p-2 rounded-md"
      disabled={isPending}
      onClick={() => startTransition(() => addProduct(formData))}>
      {isPending ? '...' : 'Add Product'}
    </button>
  )
}

export default TransButton
