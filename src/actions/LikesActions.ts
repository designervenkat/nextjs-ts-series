'use server'

import { revalidatePath } from 'next/cache'

export async function addLike(amount: number) {
  if (!amount) return

  await fetch('http://127.0.0.1:3000/likes', {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount }),
  })

  revalidatePath('likes')
}
