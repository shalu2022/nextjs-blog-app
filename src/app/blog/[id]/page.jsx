import React from 'react'
import style from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'
export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id
  const blog = await getData(id); 
  return {
    title: blog.title,
    description: blog.desc
  }
}
async function getData(id){
  let res = await fetch(`http://localhost:3000/api/posts/${id}`, { cache: 'no-store'})
  if(!res.ok){
      return notFound()
  }
  return res.json()
}

async function SingleBlog({params}) {
  let data = await getData(params.id)
  return (
    <div className={style.container}>
      <h1 className={style.heading}>{data.title}</h1>
      <div className={style.upperDiv}>
        <Image alt="image" className={style.image} src={data.image} priority={true} width={500} height={300} />
      </div>
      <div className={style.bottomDiv}>
      <p>{data.desc}</p>
      <p>{data.body}</p>
      </div>
    </div>
  )
}

export default SingleBlog