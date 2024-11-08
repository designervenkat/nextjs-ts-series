import { Products } from "@/types"
import { addProduct } from "@/action/products/actions"
export default async function ShopDashboardServer() {
  // fetching data
  await new Promise(resolve => setTimeout(resolve, 2000))
  const res = await fetch("https://672e2363229a881691ef1d2d.mockapi.io/products")
  const products = await res.json()


  return (
    <div className="bg-slate-900 text-slate-300 h-screen grid place-content-center">

      <div>      
        <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold leading-tight text-slate-300 sm:text-4xl lg:text-5xl">Best eShop</h2>

          {/* server action forms */}
          <form action={addProduct} className="my-8">
            <input type="text" name="product-name" required className="h-12 w-72 px-5 text-slate-800" placeholder="Enter product name" />

            <button type="submit" className="w-72 bg-green-400 text-green-700 h-12 font-semibold">Add Product</button>
          </form>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {products && products.map((item: Products) => (
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={item.id}>
            <div className="p-5">
                <h5 className="mb-4 text-base font-bold tracking-tight text-gray-900 dark:text-white">{ item.productName}</h5>
                <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">{item.productDesc}</p>

            </div>
          </div>
          ))}

        </div>
      </div>
    </div>
  )
}
