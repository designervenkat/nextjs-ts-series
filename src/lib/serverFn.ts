import 'server-only'

export const serverSecretFn = () => {
  console.log(`SECRET TOKEN : ABCD123`);  
  return "server only code!"
}