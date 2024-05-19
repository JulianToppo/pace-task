import Image from "next/image";
import React from "react";
import style from "@/styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={style.herosection} id="hero">
      <div className={style.credentials}>
        <h1 className={style.username}>Julian Toppo</h1>
        <p className={style.profileHeading}>
          Passionate about changing the world with technology.
        </p>
      </div>

      <div className={style.socials}>
        <div className={style.socialIcons}>
          {" "}
          <a
            href="https://github.com/JulianToppo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={"/icons/github.png"}
              alt="Github logo"
              width={40}
              height={40}
            />
          </a>
          <a
            href="https://in.linkedin.com/in/juliantoppo95"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={"/icons/linkedin.png"}
              alt="Linkedin logo"
              width={40}
              height={40}
            />
          </a>
          <a
            href="mailto:juliantoppo95@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={"/icons/email.png"}
              alt="Email logo"
              width={40}
              height={40}
            />
          </a>
        </div>

        <div className={style.aboutMeButton}>
          <button><a href="#about">More About Me </a></button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
