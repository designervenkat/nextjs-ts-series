'use client'

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Products() {

  const [products, setProducts] = useState([])

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setProducts(json))
  },[])
  return (
    <div>
      <h1>Products Listing Page</h1>
      {products && products.map((item) => (
        <div key={item.id}>
          <Link href={`/products/${item.id}`}>
            {item.name}
            </Link>
        </div>
      ))}
      
    </div>
  )
}
