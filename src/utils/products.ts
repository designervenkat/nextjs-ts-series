import { Products } from '@/types/products-types'

const fetchData = async (url: string) => {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('Something went wrong during fetching data')
  }
  return res.json()
  // throw new Error('Oop! Somethind bad happened!!')
}

export const getAllProducts = async (): Promise<Products[]> => {
  return fetchData('https://672e2363229a881691ef1d2d.mockapi.io/products')
}

export const getSingleProduct = async (id: string): Promise<Products> => {
  return fetchData(`https://672e2363229a881691ef1d2d.mockapi.io/products/${id}`)
}
