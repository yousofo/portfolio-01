import React from "react";
import Image from "next/image";
import { IProjectDemo } from "./Project";

function ProjectDemo({ data, className }: { data: IProjectDemo; className?: string }) {
  return (
    <div className={"border border-[#ffbb00] shadow-2xl shadow-amber-300/10 rounded   " + className}>
      {data.type === "video" ? (
        <video className="h-full w-full object-cover rounded" loop autoPlay muted src={data.url}></video>
      ) : (
        <Image
          loading="lazy"
          className={"h-fit w-full   object-cover  rounded" }
          src={data.url}
          width={500}
          height={0}
          alt={"project demo"}
        />
      )}
    </div>
  );
}

export default ProjectDemo;
