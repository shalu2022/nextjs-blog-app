import React, { useState } from 'react'
import styles  from './darkMode.module.css'

export default function DarkMode(){
    const [mode , setMode] = useState("dark")
    return (
        <div className={styles.container}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>🌞</div>
            <div className={styles.toggleCircle} style={ mode === "dark" ? {left: "2px"} : {right:"2px"}} onClick={()=>setMode(mode==="light"? "dark": "light")} />
        </div>
    )
}