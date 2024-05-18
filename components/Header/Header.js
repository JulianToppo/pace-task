import React from 'react'
import style from '@/styles/Header.module.css'
const Header = () => {
  return (
    <div className={style.header} >
        <p> {"<"+"Julian"+"/>"}</p>
        <div className={style.navbar}>
            <p>Projects</p>
            <p>Resume</p>
            <p>About</p>
            <p>Skills</p>
        </div>
    </div>
  )
}

export default Header