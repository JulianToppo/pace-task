import React from 'react'
import style from "@/styles/Header.module.css"

const NavSidebar = (props) => {
    const { isMobileVersion } = props;

  console.log(isMobileVersion)
  const toggle = (e) => {
   
    if (isMobileVersion == true) {
      const { toggleShow, openDropDown } = props;
      toggleShow(!openDropDown)
    }
  };

  return (
    <div className={style.navbar} onClick={toggle}>
          <p>
            <a href="#about">About</a>
          </p>

          <p>
            <a href="#experience">Experience</a>
          </p>
          <p>
            <a href="#projects">Projects</a>
          </p>
          <p>
            <a href="#getintouch">
              Contact
              </a></p>
        </div>
  )
}

export default NavSidebar