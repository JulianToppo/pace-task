import React from "react";
import style from "@/styles/Header.module.css";
const Header = () => {
  return (
    <div className={style.headersection}>
      <span className={style.header}>
        <p className={style.username}> {"<" + "Julian" + "/>"}</p>
        <div className={style.navbar}>
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
      </span>

      <div class={style.progress_container}>
        <div class={style.progress_bar}></div>
      </div>
    </div>
  );
};

export default Header;
