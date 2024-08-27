"use client"
import Link from 'next/link'
import React from 'react'
import styles from './header.module.css'
import DarkMode from '../darkMode/DarkMode'

const navLinks = [
  {
    id:1,
    name: "Home",
    link:"/"
  },
  {
    id:1,
    name: "Contact",
    link:"/contact"
  },
  {
    id:1,
    name: "Blog",
    link:"/blog"
  },
  {
    id:1,
    name: "About",
    link:"/about"
  },
  {
    id:1,
    name: "Works",
    link:"/works"
  }
]

export default function Header() {
  function clickHandler(){
    console.log("clicked")
  }
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>SHA</Link>
      <div className={styles.navList}>
      {navLinks.map((item, index)=>(
        <Link key={index} className={styles.navItems} href={item.link}>{item.name}</Link>
      ))}
      <DarkMode />
      </div>
      <button className={styles.logout} onClick={()=>clickHandler()}>
        Logout
      </button>
    </div>
  )
}
