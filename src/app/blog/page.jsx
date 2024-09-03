import React from 'react'
import style from './page.module.css'
import Image from 'next/image'
async function getData(){
    let res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store'})
    if(!res.ok){
        throw new Error("No data found")
    }
    return res.json()
  }

async function Blog() {
    let posts = await getData();
    const cards = [
      {
          heading: "Title 1",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sed molestiae ipsa sint architecto ratione, numquam ab laudantium saepe! Sapiente aliquam hic qui, veniam dolor deserunt! Enim quaerat adipisci dolore Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, sint. Optio quos exercitationem aliquid quia autem aut distinctio? Quas, commodi.",
          id:1,
          url:'/dummy-image.png'
      },
      {
           heading: "Title 2",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sed molestiae ipsa sint architecto ratione, numquam ab laudantium saepe! Sapiente aliquam hic qui, veniam dolor deserunt! Enim quaerat adipisci dolore Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, sint. Optio quos exercitationem aliquid quia autem aut distinctio? Quas, commodi.",
          id:2,
          url:'/dummy-image.png'
      },
      {
           heading: "Title 3",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sed molestiae ipsa sint architecto ratione, numquam ab laudantium saepe! Sapiente aliquam hic qui, veniam dolor deserunt! Enim quaerat adipisci dolore Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, sint. Optio quos exercitationem aliquid quia autem aut distinctio? Quas, commodi.",
          id:3,
          url:'/dummy-image.png'
      }
  ]
 


  return (     
      // <div>Works</div>   
          <div className={style.container}>
              { posts.map((item, index)=>{
                 return <div key={index} className={style.card}>
                      <div className={style.left}>
                          <h1 className={style.heading}>{item.title}</h1>
                          <p className={style.para}>{item.body}</p>
                          <button className={style.button}><a href={`/blog/${item.id}`}>Click Here</a></button>
                      </div>
                      <div className={style.right}>
                          <Image className={style.img} width= {420} height= {240} src='/dummy-image.png'/>
                      </div>
                 </div>
              })
              }
              
          </div>
  )
}

export default Blog