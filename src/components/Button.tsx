'use client'

import { addProduct } from '@/actions/productsAction'
import { useTransition } from 'react'
import { useFormStatus } from 'react-dom'

function Button() {
  const { pending } = useFormStatus()

  // const [isPending, startTransition] = useTransition()

  const formData = new FormData()
  formData.append('productName', 'Samsung')
  formData.append('productPrice', '9009')
  formData.append('productDesc', 'This is samung')

  return (
    <button
      type="submit"
      className="bg-blue-600 text-white p-2 rounded-md"
      disabled={pending}
      //onClick={() => startTransition(() => addProduct(formData))}
    >
      {pending ? '...' : 'Add Product'}
    </button>
  )
}

export default Button
