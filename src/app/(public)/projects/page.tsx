"use client";
import React, { Fragment } from "react";
import * as motion from "motion/react-client";
import Image from "next/image";
import Project, { IProject } from "@/modules/projects/Project/Project";
import projects from "./projects.json";
function Projects() {
  // const projects: IProject[] = [

  // ];

  function isInViewPort(el: HTMLDivElement) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  return (
    <div className="w-full h-full overflow-auto no-scrollbar ">
      <div className="container max-w-5xl!    mx-auto p-4   grid gap-4 md:gap-8 grid-cols-1 pt-[20vh] md:grid-cols-1 md:pt-[7vh] pb-[20vh] md:pb-[10vh]  ">
        {projects.map((project, ix) => (
          <Fragment key={ix + "-fragment-hr-project"}>
            <Project key={ix + "-project"} data={project as IProject} animationDelay={ix * 0.1} className=" " />
            <hr
              key={ix + "-hr-project"}
              className={`border-gray-600/30 my-8 ${ix == projects.length - 1 ? "hidden" : ""}`}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default Projects;
