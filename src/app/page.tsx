import Link from "next/link";

export default async function HomePage() {
  return (
    <>
      <h2 className="text-xl">Home Page</h2>
      <div className="flex items-center gap-x-3 mt-10">
        <Link className="bg-green-200 text-green-600 font-bold px-8 py-1 rounded-sm" href="/render/static">Static Page</Link>
        <Link className="bg-green-200 text-green-600 font-bold px-8 py-1 rounded-sm" href="/render/dynamic">Dynamic Page</Link>
        <Link className="bg-green-200 text-green-600 font-bold px-8 py-1 rounded-sm" href="/render/cookies">Cookies Page</Link>
      </div>
    </>
  )


}
