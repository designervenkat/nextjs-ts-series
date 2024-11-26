'use client'

import { addLike } from '@/actions/LikesActions'
import { useOptimistic, useTransition, startTransition } from 'react'

type Props = {
  likes: number
}

const OptimisticLikes = ({ likes }: Props) => {
  // const [isPending, startTransition] = useTransition()

  const [optimisticLikes, setOptimisticLikes] = useOptimistic(
    likes,
    (state, amount) => state + Number(amount)
  )

  const updateLikes = async (amount: number) => {
    startTransition(() => {
      setOptimisticLikes(amount)
    })
    await addLike(amount)
  }

  return (
    <div className="flex items-center  space-x-10 p-5 mb-2 mt-10">
      <button
        className="bg-sky-800 w-14 h-14 rounded-full text-2xl"
        type="button"
        onClick={() => updateLikes(-1)}>
        👎🏻
      </button>

      <h3 className="text-2xl font-semibold ">
        Optimistic Likes : {optimisticLikes}
      </h3>

      <button
        className="bg-pink-50 w-14 h-14 rounded-full text-2xl"
        type="button"
        onClick={() => updateLikes(1)}>
        ❤️
      </button>
    </div>
  )
}

export default OptimisticLikes
