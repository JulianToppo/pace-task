import React from "react";
import { projects } from "@/utils/data/projects";
import style from "@/styles/Projects.module.css";

const Projects = () => {
  return (
    <div className={style.container} id="projects">
      <h1 className={style.heading}>Projects</h1>
      <div className={style.projects}>
        {projects.map((projects, id) => {
          return (
            <div className={style.project_tab}>
              <img
                className={style.projectPhoto}
                src={projects.imageSrc}
              ></img>
              <p className={style.projectHeading}>{projects.title}</p>
              <p className={style.projectDescription}>{projects.description}</p>
              <div className={style.techtags}>
                {projects.skills.map((tech) => {
                  return <div className={style.tags}> {tech}</div>;
                })}
              </div>

              <div className={style.buttons_bars}>
                {/* <button>
                  <a href={projects.demo}>Demo</a>
                </button> */}
                <button className={style.local}>
                  <a
                    href={projects.source}
                    target="_new"
                    rel="noopener noreferrer"
                  >
                    Source
                  </a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
