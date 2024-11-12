export default async function Analytics() {
  await new Promise((resolve) => setTimeout(resolve, 5000))
  return (
    <h1 className="text-2xl">
      Google Analytics
    </h1>
  )
}
