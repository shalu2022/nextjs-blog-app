import React from 'react'
import style from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getData(id){
  let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store'})
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
        <Image className={style.image} src='/dummy-image.png' width={500} height={300} />
      </div>
      <div className={style.bottomDiv}>
        <p>{data.body}</p>
      </div>
    </div>
  )
}

export default SingleBlog