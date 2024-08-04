import React, { useContext, useState } from 'react'
import styles  from './darkMode.module.css'
import { ThemeContext } from '../../../context/ThemeContext'

export default function DarkMode(){
    const {mode, toggle}= useContext(ThemeContext)
    // const [mode , setMode] = useState("dark")
    return (
        <div className={styles.container}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>🌞</div>
            <div className={styles.toggleCircle} style={ mode === "dark" ? {left: "2px"} : {right:"2px"}} onClick={toggle} />
        </div>
    )
}