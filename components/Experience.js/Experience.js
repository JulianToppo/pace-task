import React from "react";
import { skills } from "@/utils/data/skills";

import { exp } from "@/utils/data/experience";
import style  from "@/styles/Experience.module.css";
import Image from "next/image";

const Experience = () => {
  return (
    <div className={style.container} id="experience">
      <h1 className={style.heading}>Experience</h1>
      <div className={style.experience}>
        <div className={style.techstack}>
          {skills?.map((skill, id) => {
            return (
              <div key={id} className={style.technology_card}>
                <div className={style.image_background}>
                  <Image
                    src={skill.imageSrc}
                    alt={"image" + id}
                    width={100}
                    height={100}
                  ></Image>
                </div>
                <h4>{skill.title}</h4>
              </div>
            );
          })}
        </div>
        <div className={style.history}>
          {exp?.map((job, id) => {
            return (
              <div key={id} className={style.jobdetails}>
                <Image src={job.imageSrc} alt={"image" + id} width={100} height={100}></Image>

                <div className={style.worksummary}>
                
                  <p className={style.jobTitle}>{job.organisation+","+job.role}</p>
                  <p className={style.smalltext}>
                    {job.startDate.toString() + "-" + job.endDate.toString()}
                  </p>
                  <ul>
                    {job.experiences.map((item,key) => {
                      return <li key={key} className={style.smalltext}>{item}</li>;
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
