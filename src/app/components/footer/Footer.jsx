import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className={styles.container} >
      <p>©2024 SHA. All rights reserved</p>
      <div className={styles.imageContainer}>
        <Image src='/facebook_icon.png' className={styles.icon} alt='facebook_icon' width={15} height={15}/>
        <Image src='/instagram_icon.png' className={styles.icon} alt='instagram_icon' width={15} height={15}/>
        <Image src='/whatsapp_icon.png' className={styles.icon} alt='whatsapp_icon' width={15} height={15}/>
        <Image src='/twitter_icon.png' className={styles.icon} alt='twitter_icon' width={15} height={15}/>
      </div>
    </div>
  )
}
