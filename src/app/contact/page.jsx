import React from 'react'
import style from './contact.module.css'
import Image from 'next/image'

function Contact() {
  return (
    <div className={style.container}>
      <h1 className={style.mainHeading}>Contact Us</h1>
      <div className={style.innerContainer}>
        <div className={style.imageContainer}>
          <Image alt = "contact-us image" className={style.img} width={500} height={400} src="/contact_us.png"/>
        </div>
        <div className={style.form}>
          <input className={style.input} type='text' placeholder='First Name'/>
          <input className={style.input} type='text' placeholder='Last Name'/>
          <input className={style.input} type='text' placeholder='Enter email'/>
          <input className={style.input} type='text' placeholder='Enter Phone No.'/>
          <textarea className={style.textarea} placeholder='Message...' cols={29} rows={6}/>
          <button type='submit' className={style.button}>Send Message</button>
        </div>
      </div>
    </div>
  )
}

export default Contact