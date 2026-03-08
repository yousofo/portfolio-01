import { useInView } from "@/lib/hooks/useInView";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import "./style.css";
import { div } from "motion/react-client";
import useStore from "@/lib/store/store";
import ProjectDemo from "./ProjectDemo";
import { Marquee } from "@/components/ui/marquee";
export interface IProjectDemo {
  type: "video" | "image";
  url: string;
}

export interface IProject {
  name: string;
  description: string;
  demos: IProjectDemo[];
  skills: string[];
}

function Project({ data, animationDelay, className }: { data: IProject; animationDelay: number; className?: string }) {
  // const { ui, updateUI } = useStore();
  // const wasInView = useRef(false);

  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.3,
  });

  // useEffect(() => {
  //   if (inView) {
  //     wasInView.current = true;
  //     updateUI({ projects: { inView: ui.projects.inView + 1 } });
  //   } else {
  //     if (wasInView.current) {
  //       wasInView.current = false;
  //       updateUI({ projects: { inView: ui.projects.inView - 1 } });
  //     }
  //   }
  // }, []);

  const multiDemo = (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="md:min-w-3/4 md:w-3/4">
        <ProjectDemo data={data.demos[0]} />
      </div>
      <div className="   relative flex-1 ">
        <div className="  top-0   md:absolute w-full overflow-hidden md:h-full ">
          <Marquee pauseOnHover className="[--duration:20s] p-0 md:hidden">
            {data.demos.slice(1).map((demo, ix) => (
              <div key={ix} className="w-30  ">
                <ProjectDemo data={demo} />
              </div>
            ))}
          </Marquee>
          <Marquee pauseOnHover vertical className="[--duration:20s] p-0 hidden md:flex">
            {data.demos.slice(1).map((demo, ix) => (
              <div key={ix} className=" ">
                <ProjectDemo data={demo} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      {/* <div className="flex flex-col gap-4 flex-1">
        
      </div> */}
    </div>
  );

  return (
    <div
      ref={ref}
      className={`text-center flex flex-col p-4  rounded border-gray-600/30  gap-4 project ${inView ? "project-fade-in" : "project-fade-out"} ${className}`}
    >
      <div>
        <h2 className="text-lg font-semibold text-pink-50">{data.name}</h2>
        <p className="text-sm text-gray-100">{data.description}</p>
      </div>

      <div className="flex-1">{data.demos.length > 1 ? multiDemo : <ProjectDemo data={data.demos[0]} />}</div>
      <div className="flex gap-2 justify-center">
        {data.skills.map((skill) => (
          <span className="text-yellow-300   text-xs border border-yellow-300/10 px-2 py-0.5 rounded" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Project;
