import Image from 'next/image'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <Image
          src="https://tanstack.com/_build/assets/logo-color-100w-br5_Ikqp.png"
          alt="Tan"
          width={60}
          height={60}
        />

        <h1 className="font-semibold text-xl text-gray-400">
          TanStack Query \ React Query
        </h1>

        <ol className="flex flex-col gap-10 text-xl">
          <li className="text-2xl my-4">Advantages</li>

          <li>
            <strong>Data Fetching Becomes Super EASY :</strong> With a simple
            useQuery hook, fetching data becomes super easy.
          </li>

          <li>
            <strong>Built in Loading and Error States :</strong> No need to
            write custom code for handling loading, errors, or success states
          </li>

          <li>
            <strong>Automatic Caching :</strong> React Query automatically
            caches your data.
          </li>

          <li>
            <strong>Background Refetching: </strong> If your data gets stale or
            out of date, TanStack Query can refetch it in the background.
          </li>

          <li>
            <strong>Pagination and Infinite Scrolling :</strong> Handling
            pagination or infinite scrolling? React Query has you covered with
            tools specifically designed for those complex use cases.
          </li>
        </ol>
      </main>
    </div>
  )
}
