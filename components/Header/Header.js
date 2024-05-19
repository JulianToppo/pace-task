import React from 'react'
import style from '@/styles/Header.module.css'
const Header = () => {
  return (
    <div className={style.header} >
        <p> {"<"+"Julian"+"/>"}</p>
        <div className={style.navbar}>
            <p><a href="#projects">Projects</a></p>
            <p><a  href="#experience">Experience</a></p>
            <p><a  href="#about">About</a></p>
            <p>Skills</p>
        </div>
    </div>
  )
}

export default Header

