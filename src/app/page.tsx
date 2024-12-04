import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center py-20">
      <Image
        src="https://tanstack.com/_build/assets/logo-color-100w-br5_Ikqp.png"
        alt="Tan"
        width={60}
        height={60}
      />

      <h1 className="font-semibold text-xl text-gray-400">
        TanStack Query \ React Query
      </h1>
    </main>
  )
}
