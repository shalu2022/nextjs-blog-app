import react, { Children } from 'react'
import style from './page.module.css'
export default function WorkLayout({children}){
    return (<div className={style.layoutContainer}>
          <h1 className={style.layoutHeading}>Check Out Our Works</h1>
          {children}
        </div>)
}
