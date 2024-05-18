import Image from 'next/image';
import React from 'react'
import style from '@/styles/AboutUs.module.css'
const AboutUs = () => {
  return (
 <div className={style.aboutMeSection}>
        <div className={style.myImage}>
            <Image className={style.profileimage} src={"/icons/aboutme.png"} width={500} height={500} alt="aboutme image"/>
        </div>
        <div className={style.AboutMe}>
            <h1 className={style.aboutMeHeading}>About Me</h1>
            <p>
            My name is Julian Toppo, and I am a dedicated software engineer with a Bachelor of Technology degree in Computer Science from Chitkara University. With 1.5 years of industry experience, I am passionate about leveraging technology to drive positive change and give back to the community. My goal is to utilize my expertise in software engineering to develop innovative solutions that address real-world challenges and make a meaningful impact on society.
            </p>
        </div>
    </div>
 
  )
   
 
};

export default AboutUs