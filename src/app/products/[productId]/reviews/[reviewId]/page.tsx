import React from 'react'

type Params = Promise<{

    productId: string;
    reviewId: string;

}>;

function getRandomNum(num: number) {
  return Math.floor(Math.random() * num)
} 

export default async function Reviews({ params }: {params: Params}) {
  
  const { productId, reviewId } = await params
  
   const random = getRandomNum(2)

  if (random === 1) {
    throw new Error("Errow loading review")
  }


  return (
    <div className='h-screen grid place-content-center'>
      <h1 className='text-4xl'>Review {reviewId} for product { productId}</h1>
    </div>
  )
}
