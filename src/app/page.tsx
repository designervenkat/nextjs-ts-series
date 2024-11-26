import OptimisticLikes from '@/components/OptimisticLikes'
import Likes from '../components/Likes'

export default async function HomePage() {
  const res = await fetch('http://127.0.0.1:3000/likes', {
    cache: 'no-cache',
    next: {
      tags: ['likes'],
    },
  })

  const { likes } = await res.json()

  return (
    <div className="flex flex-col justify-center items-center p-10">
      <h2 className="text-2xl font-mono text-slate-400">
        Server actions with useOptimistic
      </h2>

      <Likes likes={likes} />

      <OptimisticLikes likes={likes} />
    </div>
  )
}
