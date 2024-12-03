export const getAllProducts = async () => {
  const res = await fetch(
    'https://672e2363229a881691ef1d2d.mockapi.io/products'
  )

  if (!res.ok) return 'Something went wrong during fetching data!'

  const data = await res.json()

  return data
  // return Promise.reject('Failed to fetch products')
}

export const getSingleProduct = async (id: string) => {
  const res = await fetch(
    `https://672e2363229a881691ef1d2d.mockapi.io/products/${id}`
  )

  if (!res.ok) throw new Error('Something went wrong during fetching data')
  const data = await res.json()
  return data
}
