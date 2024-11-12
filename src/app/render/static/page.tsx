
import { Products } from "@/types"
import Link from "next/link"

export default async function StaticPage() {

  
  const res = await fetch("https://672e2363229a881691ef1d2d.mockapi.io/products")
  const products: Products[] = await res.json()
  console.log(products)


  return (
    <>
      <h2 className="text-xl text-orange-400">Static Page - Product Count : {products.length}</h2>
      <div className="flex items-center gap-x-3 mt-10">
        <Link className="bg-green-200 text-green-600 font-bold px-8 py-1 rounded-sm" href="/render/static">Static Page</Link>
        <Link className="bg-green-200 text-green-600 font-bold px-8 py-1 rounded-sm" href="/render/dynamic">Dynamic Page</Link>
      </div>

      <div className="grid grid-cols-2 gap-10 mt-10">
        {products.map((item: Products) => (
          <div key={item.id} className="flex justify-start items-start flex-col gap-y-4 bg-slate-700 text-slate-300 py-4 px-10 w-96">
            <h2>{item.productName}</h2>
            <p className="line-clamp-1 text-slate-500">{item.productDesc}</p>
          </div>
        ))}
      </div>
    </>
  )
}
