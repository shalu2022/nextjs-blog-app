import react, { Children } from 'react'
import style from './page.module.css'
export const metadata = {
  title: "Works",
  description: "Portfolio of Blog Us",
}; 
export default function WorkLayout({children}){
    return (<div className={style.layoutContainer}>
          <h1 className={style.layoutHeading}>Check Out Our Works</h1>
          {children}
        </div>)
}
