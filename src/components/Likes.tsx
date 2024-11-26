'use client'

import { addLike } from '@/actions/LikesActions'

type Props = {
  likes: number
}

const Likes = ({ likes }: Props) => {
  return (
    <div className="flex items-center  space-x-10 p-5 mb-2 mt-40">
      <button
        className="bg-sky-800 w-14 h-14 rounded-full text-2xl"
        type="button"
        onClick={() => addLike(-1)}>
        👎🏻
      </button>

      <h3 className="text-2xl font-semibold ">Regular Likes : {likes}</h3>

      <button
        className="bg-pink-50 w-14 h-14 rounded-full text-2xl"
        type="button"
        onClick={() => addLike(1)}>
        ❤️
      </button>
    </div>
  )
}

export default Likes
