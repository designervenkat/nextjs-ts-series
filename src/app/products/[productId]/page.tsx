import Link from "next/link"

export default async function ProductDetails(
  {
    
    params,
    searchParams

  } : {
      
      params: Promise<{ productId: string }>,
      searchParams: Promise<{ [key: string]: string | string[] | undefined }>

    }
) {
  // props prameters
  const { productId } = await params

  // search parameters
  const { name, storage, color } = await searchParams

  return (
    <div className="grid place-content-center">

      <h2 className="my-5">Product Detail Page</h2>
      
      <div className="bg-slate-800 p-5 grid grid-cols-2 gap-6 text-xs text-slate-50">
        {name && <p>Product Name - {name} </p>}
        {productId && <p>Product Id - {productId} </p>}
        {storage && <p>Product Storage - {storage} </p>}
        {color && <p>Product Color - {color} </p>}
      </div>

      <Link className="bg-green-200 text-green-800 text-xs px-8 py-2 w-36 my-5 rounded-sm" href={`/products/10/reviews/10`}>Check Review</Link>
        
    </div>
  )
}


