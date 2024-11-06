export default async function ProductDetails(
  { params, searchParams }: { params: { productId: number }, searchParams: Promise<{ [key:string]: string | string[] | undefined}> }
  // { params }: {params: Promise<{productId: string}>} 
) {
  console.log(params);
  // props prameters
  const { productId } = await params
  // const productId = (await params).productId

  // search parameters
  const { name, storage, color } = await searchParams
   
  // const name = (await searchParams).name
  //  const storage = (await searchParams).storage
  //  const color = (await searchParams).color

  return (
    <div>
      Product Detail Page for <br />
      
      Product Number - {productId} <br />
      Product Name - {name} <br />
      Product Storage = {storage} <br />
      Product Color =  {color}
    </div>
  )
}


