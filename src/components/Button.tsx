'use client'

import { useFormStatus } from 'react-dom'

function Button() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className="bg-blue-600 text-white p-2 rounded-md"
      disabled={pending}>
      {pending ? '...' : 'Add Product'}
    </button>
  )
}

export default Button
