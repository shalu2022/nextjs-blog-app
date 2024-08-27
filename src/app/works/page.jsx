import react from 'react'
import style from './page.module.css'
import Image from 'next/image'

export default function Work(){
    const cards = [
        {
            heading: "Illustrations",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sed molestiae ipsa sint architecto ratione, numquam ab laudantium saepe! Sapiente aliquam hic qui, veniam dolor deserunt! Enim quaerat adipisci dolore Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, sint. Optio quos exercitationem aliquid quia autem aut distinctio? Quas, commodi.",
            path:'illustration',
            url:'/dummy-image.png'
        },
        {
             heading: "Websites",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sed molestiae ipsa sint architecto ratione, numquam ab laudantium saepe! Sapiente aliquam hic qui, veniam dolor deserunt! Enim quaerat adipisci dolore Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, sint. Optio quos exercitationem aliquid quia autem aut distinctio? Quas, commodi.",
            path:"websites",
            url:'/dummy-image.png'
        },
        {
             heading: "Applications",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sed molestiae ipsa sint architecto ratione, numquam ab laudantium saepe! Sapiente aliquam hic qui, veniam dolor deserunt! Enim quaerat adipisci dolore Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, sint. Optio quos exercitationem aliquid quia autem aut distinctio? Quas, commodi.",
            path:"applications",
            url:'/dummy-image.png'
        }
    ]
    return (     
        // <div>Works</div>   
            <div className={style.container}>
                { cards.map((item, index)=>{
                   return <div key={index} className={style.card}>
                        <div className={style.left}>
                            <h1 className={style.heading}>{item.heading}</h1>
                            <p className={style.para}>{item.body}</p>
                            <button className={style.button}><a href={`/works/${item.path}`}>Click Here</a></button>
                        </div>
                        <div className={style.right}>
                            <Image width= {500}
    height= {340} src={item.url}/>
                        </div>
                   </div>
                })
                }
                
            </div>
    )
}