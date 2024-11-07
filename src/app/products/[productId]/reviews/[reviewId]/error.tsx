"use client"

export default function Error(
  { error, reset }: { error: Error, reset: () => void }) {
  return (
    <div className="grid place-content-center">
      <p>{error.message}</p>

            <button className="bg-orange-300 text-orange-800 px-6 py-1 rounded-sm text-sm my-5" onClick={reset}>Try Again</button>
    </div>
  )
}
