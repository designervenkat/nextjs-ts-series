import { addProduct } from '@/actions/productsAction'
import Button from '@/components/Button'
import { Product } from '@/types/products'
import { revalidatePath, revalidateTag } from 'next/cache'
import Link from 'next/link'

export default async function Home() {
  // fetch products
  const res = await fetch(
    'https://672e2363229a881691ef1d2d.mockapi.io/products',
    {
      cache: 'no-cache',
      next: {
        tags: ['products'],
      },
    }
  )
  const products: Product[] = await res.json()

  return (
    <div className="h-screen grid place-content-start p-20 grid-cols-1 gap-y-10">
      <h2 className="text-2xl font-mono font-semibold">
        Server Action | Server Mutation | useTransistions | useFormStatus
      </h2>
      <h2 className="text-2xl font-mono font-semibold text-slate-500">
        Products
      </h2>

      <div className="grid grid-cols-3">
        <form action={addProduct} className="flex flex-col gap-2">
          <input
            name="title"
            type="text"
            placeholder="enter product name..."
            className="border text-slate-800 border-gray-300 p-2 rounded-md"
          />
          <input
            name="price"
            type="text"
            placeholder="enter product price..."
            className="border text-slate-800 border-gray-300 p-2 rounded-md"
          />
          <textarea
            name="desc"
            cols={5}
            rows={5}
            placeholder="Enter product descriptions"
            className="border text-slate-800 border-gray-300 p-2 rounded-md"
          />

          <Button />
        </form>
      </div>

      <div className="grid grid-cols-3 gap-10">
        {products.map((item: Product) => (
          <Link
            key={item.id}
            href="#"
            className="flex flex-col gap-y-4 bg-slate-700 rounded-md p-8">
            <h3 className="text-base font-bold text-gray-100">
              {item.productName}
            </h3>

            <p className="max-w-sm text-sm text-gray-400 line-clamp-1">
              {item.productDesc}
            </p>

            <strong className="mt-4">$ {item.productPrice}</strong>
          </Link>
        ))}
      </div>
    </div>
  )
}
