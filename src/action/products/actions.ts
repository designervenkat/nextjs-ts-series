'use server'

import { revalidatePath } from "next/cache"

export async function addProduct(formData: FormData) {
    "use server"

    const productName = formData.get("product-name")

    const res = await fetch("https://672e2363229a881691ef1d2d.mockapi.io/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({productName})
    })

    const newProduct = await res.json()
    revalidatePath('/shop-server')
    console.log(newProduct);        
}
  
// removeProduct
// editProduct