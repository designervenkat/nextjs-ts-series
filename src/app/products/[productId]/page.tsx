
export default async function ProductDetails({ params }: { params: { productId: string } }) {

  let data = await fetch(`https://jsonplaceholder.typicode.com/users/${params.productId}`)
  let user = await data.json()


  return (
    <>
      <h2>Product Details - {params.productId}</h2>

      <ul>
        {user.id}
        {user.name}
        {user.email}
      </ul>
    </>

  )

}
