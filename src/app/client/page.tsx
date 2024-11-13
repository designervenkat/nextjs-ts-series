"use client"

import { serverSecretFn } from "@/lib/serverFn";

export default function ClientPage() {
  
  const result = serverSecretFn()
  
  console.log("Client Page", result);

  return (
    <div>
      <h1> Client Page - {result}</h1>
    </div>
  )
}
