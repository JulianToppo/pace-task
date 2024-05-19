import React, { useEffect, useState } from "react";
import style from "@/styles/Header.module.css";
import NavSidebar from "./Navbar";
const Header = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [openDropDown,setOpenDropDown]= useState(false)

  const handleResize = () => {
    if (window.innerWidth < 830) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const ondropDownClickHandler=(e)=>{
    e.preventDefault();
    setOpenDropDown(!openDropDown)
  }

  return (
    <div className={style.headersection}>
      <span className={style.header}>
        <p className={style.username}>   <a href="#hero"> {"<" + "Julian" + "/>"}</a></p>
        {isMobile ? 
        openDropDown==true?
        <NavSidebar toggleShow={setOpenDropDown} openDropDown={openDropDown} isMobileVersion={isMobile}/>
          :<img
          className={style.navbar_dropdown}
          src={"/icons/dropdownsettings.png"}

          onClick={ondropDownClickHandler}
        ></img>
       : (
        <NavSidebar isMobileVersion={isMobile}/>
      )}
      </span>

      <div class={style.progress_container}>
        <div class={style.progress_bar}></div>
      </div>
    </div>
  );
};

export default Header;
