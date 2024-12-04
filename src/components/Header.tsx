import Link from 'next/link'
export default function Header() {
  return (
    <header className="flex w-full items-center justify-center my-10 gap-x-4 mx-auto">
      <Link
        className="bg-purple-200 text-purple-700 font-semibold px-8 py-4 rounded-md"
        href="/">
        Home
      </Link>
      <Link
        className="bg-orange-200 text-orange-700 font-semibold px-8 py-4 rounded-md"
        href="/product-cc">
        Regular Fetch
      </Link>
      <Link
        className="bg-sky-200 text-sky-700 font-semibold px-8 py-4 rounded-md"
        href="/product-sc">
        Server Fetch
      </Link>
      <Link
        className="bg-green-200 text-green-700 font-semibold px-8 py-4 rounded-md"
        href="/tanstack">
        Tanstack RQ
      </Link>
    </header>
  )
}
