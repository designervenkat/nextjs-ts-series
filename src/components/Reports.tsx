export default async function Reports() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return (
    <h1 className="text-2xl">
      Reports Page
    </h1>
  )
}
