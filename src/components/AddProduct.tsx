import { createProduct } from '@/utils/products'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import toast from 'react-hot-toast'

export default function AddProduct() {
  const queryClient = useQueryClient()

  const { isPending, isError, error, mutateAsync } = useMutation({
    mutationFn: createProduct,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['products'],
      })
      toast.success('Successfully Created!')
    },
    onError: () => {
      toast.error("This didn't work.")
    },
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)

    const productData = {
      productName: formData.get('productName') as string,
      productPrice: formData.get('productPrice') as string,
      productDesc: formData.get('productDesc') as string,
    }

    if (
      !productData.productName ||
      !productData.productPrice ||
      !productData.productDesc
    ) {
      return
    }

    try {
      await mutateAsync(productData)

      console.log('Product created!')
    } catch (error: any) {
      console.error('Error creating product!', error.message)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-y-4 text-slate-100">
      <div className="flex flex-col gap-y-4 ">
        <label>Product Title:</label>
        <input
          className="h-12 px-5 rounded-sm text-slate-800"
          name="productName"
          type="text"
          required
        />
      </div>
      <div className="flex flex-col gap-y-4">
        <label>Product Price:</label>
        <input
          className="h-12 px-5 rounded-sm text-slate-800"
          name="productPrice"
          type="number"
          step="0.01"
          required
        />
      </div>
      <div className="flex flex-col gap-y-4">
        <label>Product Description:</label>
        <textarea
          className="h-16 px-5 py-1 rounded-sm text-slate-800"
          name="productDesc"
          required></textarea>
      </div>
      <button
        className="bg-emerald-200 text-emerald-700 px-8 py-4 font-semibold"
        type="submit"
        disabled={isPending}>
        {isPending ? 'Creating...' : 'Create Product'}
      </button>
      {isError && <p>Error: {error.message}</p>}
    </form>
  )
}
