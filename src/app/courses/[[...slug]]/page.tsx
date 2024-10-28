import { notFound } from 'next/navigation'
import React from 'react'

export default function Courses({params}:{
    params:{
        slug: string[]
    }
}) {
    // if(params.slug?.length === 1){
    //     notFound()
    // }

    // courses/maths
  if(params.slug?.length === 2){
    return(
        <h1>Courses : {params.slug[0]} and Chapter: {params.slug[1]}</h1> // courses ui and chapter ui
    )
    // courses
  } else if (params.slug?.length === 1){
    return(
        <h1>Courses : {params.slug[0]} </h1> // courses ui
    )
  }

  return <h1>Courses Home Page</h1> // all courses here ui
}