import { notFound } from 'next/navigation'
import React from 'react'

export default async function Courses(
    props:{
        params: Promise<{
            slug: string[]
        }>
    }
) {
    const params = await props.params;
    // if(params.slug?.length === 1){
    //     notFound()
    // }

    // courses/maths
    if(params.slug?.length === 2){
      return (
          // courses ui and chapter ui
          (<h1>Courses : {params.slug[0]}and Chapter: {params.slug[1]}</h1>)
      );
      // courses
    } else if (params.slug?.length === 1){
      return (
          // courses ui
          (<h1>Courses : {params.slug[0]} </h1>)
      );
    }

    return <h1>Courses Home Page</h1> // all courses here ui
}