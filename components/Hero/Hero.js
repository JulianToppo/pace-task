import Image from "next/image";
import React from "react";
import style from "@/styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={style.herosection}>
      <div className={style.credentials}>
        <h1 className={style.username}>Julian Toppo</h1>
        <p className={style.profileHeading}>
          Passionate about changing the world with technology.
        </p>
      </div>

      <div className={style.socials}>
        <div className={style.socialIcons}>
          {" "}
          <Image
            src={"/icons/github.png"}
            alt="Github logo"
            width={40}
            height={40}
          />
          <Image
            src={"/icons/linkedin.png"}
            alt="Linkedin logo"
            width={40}
            height={40}
          />
        </ div>

        <div className={style.aboutMeButton}>
          <button>More About Me</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
