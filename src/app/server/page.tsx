import { serverSecretFn } from "@/lib/serverFn";

export default function ServerPage() {

  const result = serverSecretFn()
  
  console.log("Server Page", result);
  
  return (
    <div>
      <h1> Server Page - {result }</h1>
    </div>
  )
}
