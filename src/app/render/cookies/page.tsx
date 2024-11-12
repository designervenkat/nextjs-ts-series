import { cookies } from 'next/headers'
import Link from "next/link";

export default async function CookiesPage() {

  const cookieData = cookies()

  const theme = (await cookieData).get("token")

  return (
    <>
       <h2 className="text-xl text-purple-400">Cookies Page - </h2>
      <div className="flex items-center gap-x-3 mt-10">
        <Link className="bg-green-200 text-green-600 font-bold px-8 py-1 rounded-sm" href="/render/static">Static Page</Link>
        <Link className="bg-green-200 text-green-600 font-bold px-8 py-1 rounded-sm" href="/render/dynamic">Dynamic Page</Link>
       </div>
       
       <div className="grid grid-cols-2 gap-10 mt-10">
        <div className="text-yellow-300 text-xl">Time - {new Date().toDateString()}</div>

        <div className="text-sky-400 text-xl">
          Token - {theme?.value}
        </div>
      </div>
    </>
  )
}
