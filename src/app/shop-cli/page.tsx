'use client'

import { Products } from "@/types"
import { useState, useEffect } from "react"

export default function ShopDashboard() {

  const [products, setProducts] = useState<Products[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')


  useEffect(() => {

    // async function to fetch products
    async function fetchProducts() {

      try {

        const res = await fetch("https://672e2363229a881691ef1d2d.mockapi.io/products")

        if (!res.ok) throw new Error("Failed to fetch products!")

        const data = await res.json()

        setProducts(data)
        
      } catch (error) {
      
        setError("Failed to fetch products!")

        if (error instanceof Error) {
          setError(`${error.message}`)
        }

      } finally {

        setLoading(false)

      }

    }

    fetchProducts()

  }, [])




  if (loading) return <div className="bg-slate-900 text-slate-300 h-screen grid place-content-center">Fetching products...</div>

  if (error) return <div className="bg-slate-900 text-red-300 h-screen grid place-content-center">{error}</div>

  return (
    <div className="bg-slate-900 text-slate-300 h-screen grid place-content-center">

      <div>
        <h2 className="text-3xl font-bold leading-tight text-slate-300 sm:text-4xl lg:text-5xl">Best eShop</h2>

        <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {products.map((item) => (
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={item.id}>
              <div className="p-5">
                <h5 className="mb-4 text-base font-bold tracking-tight text-gray-900 dark:text-white">{item.productName}</h5>
                <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">{item.productDesc}</p>               
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}
