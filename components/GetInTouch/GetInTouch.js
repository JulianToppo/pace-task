import React from "react";
import style from "@/styles/GetInTouch.module.css";
import Image from "next/image";
const GetInTouch = () => {
  return (
    <div className={style.getInTouchSection}>
      <h1>Get In Touch </h1>
      <p>
        I'm currently looking for full-time Backend/Frontend Developer
        opportunities! If you know of any positions available, if you have any
        questions, or if you just want to say hi, please feel free to email me
        at, juliantoppo95@gmail.com.
      </p>

      <p className={style.madeby}>
        <Image
           className={style.invert}
          src={"/icons/coding.png"}
          width={20}
          height={20}
          alt="coding logo"
        />
        with
        <Image
         
          src={"/icons/heart.png"}
          width={20}
          height={20}
          alt="heart logo"
        />{" "}
        by <button className={style.username}>Julian AT</button>
        using{" "}
        <Image
          src={"/icons/react.png"}
          width={20}
          height={20}
          alt="react logo"
          className={style.invert}
        />
      </p>
    </div>
  );
};

export default GetInTouch;
