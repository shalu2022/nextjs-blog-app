import React from 'react'
import style from './about.module.css'

function About() {
  return (
  <div className={style.main}>
    <div className={style.container}>
        <div><img className={`${style.img1} ${style.imgContainer}`} src='/about-1.jpg'/></div>
        <div><img className={`${style.img2} ${style.imgContainer}`} src='/about-2.jpg'/></div>
        <div><img className={`${style.img3} ${style.imgContainer}`} src='/about-3.jpg'/></div>      
    </div>
    <div>
      <h2 className={style.heading}>This is the main Heading</h2>
      <p className={style.subheading}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam</p>
    </div>
  </div>
  )
}

export default About