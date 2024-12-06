import { Products } from '@/types/products-types'
import axios from 'axios'

const fetchData = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const res = await fetch(url, options)
  if (!res.ok) {
    throw new Error('Something went wrong during fetching data')
  }
  return res.json()
  // throw new Error('Oop! Somethind bad happened!!')
}

export const getAllProducts = async (): Promise<Products[]> => {
  return fetchData('https://672e2363229a881691ef1d2d.mockapi.io/products')
}

export const createProduct = async (
  product: Omit<Products, 'id'>
): Promise<Products> => {
  return fetchData('https://672e2363229a881691ef1d2d.mockapi.io/products', {
    method: 'POST',
    headers: {
      // "Auth-Token": "",
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  })
}

export const getSingleProduct = async (id: string): Promise<Products> => {
  return fetchData(`https://672e2363229a881691ef1d2d.mockapi.io/products/${id}`)
}

export const fetchCommentByProductId = async (id: string) => {
  const res = await fetch(
    `https://672e2363229a881691ef1d2d.mockapi.io/products/${id}/comments`
  )
  if (!res.ok) throw new Error("Oh no! can't find the product")
  const data = await res.json()
  console.log(data)

  return data
}

export const paginatedProducts = async (page: number): Promise<Products[]> => {
  return fetchData(
    `https://672e2363229a881691ef1d2d.mockapi.io/products?limit=10&page=${page}`
  )
}

// Infinite Scroll One
export const fetchInfiniteScrollOne = async ({ pageParam = 1 }) => {
  try {
    const res = await axios.get(
      `https://672e2363229a881691ef1d2d.mockapi.io/products?limit=10&page=${pageParam}`
    )
    return res.data
  } catch (error) {
    console.log(error)
  }
}

// Infinite Scroll Two

export const fetchInfiniteScrollTwo = async ({
  pageParam = 1,
}: {
  pageParam: number
}): Promise<{
  data: Products[]
  currentPage: number
  nextPage: number | null
}> => {
  try {
    const res = await axios.get(
      `https://672e2363229a881691ef1d2d.mockapi.io/products?limit=10&page=${pageParam}`
    )

    const nextPage = pageParam + 1
    const isLastPage = res.data.length < 10

    return {
      data: res.data,
      currentPage: pageParam,
      nextPage: isLastPage ? null : nextPage,
    }
  } catch (error) {
    console.log(error)
    throw new Error('Failed')
  }
}

// Promise<{ data: Products[]; currentPage: number; nextPage: number | null }>
