import React from 'react'
import style from './page.module.css'
import Image from 'next/image'
export const metadata = {
    title: "blog",
    description: "Blog Details",
  }; 
async function getData(){
    let res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store'})
    if(!res.ok){
       return new Error("Not Found")
    }
    return res.json()
  }

async function Blog() {
    const posts = await getData();
  return (     
      // <div>Works</div>   
          <div className={style.container}>
              { posts.map((item, index)=>{
                 return <div key={index} className={style.card}>
                      <div className={style.left}>
                          <h1 className={style.heading}>{item.title}</h1>
                          <p className={style.para}>{item.desc}</p>
                          {/* <p className={style.para}>{item.body}</p> */}
                          <a href={`/blog/${item._id}`} ><button className={style.button}>Click Here</button></a>
                      </div>
                      <div className={style.right}>
                          <Image className={style.img} alt="blog image" width= {420} height= {240} src={item.image}/>
                      </div>
                 </div>
              })
              }
              
          </div>
  )
}

export default Blog