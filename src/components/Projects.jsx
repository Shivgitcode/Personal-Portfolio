import { useContext } from "react";
import { projects } from "../constants";
import Project from "./Project";
import ProjectDetails from "./ProjectDetails";
import { AppProvider } from "../context/AppProvider";
export default function Projects() {
  return (
    <section className=" px-[17px] flex flex-col justify-evenly items-center w-full h-full">
      <h1 className="font-poppins font-semibold text-[32px] w-full text-center mt-[24px] mb-[24px]">
        Projects
      </h1>
      <p className="font-poppins font-normal text-[16px] w-full text-center text-[#b1b2b3] mb-[35px]">
        I have worked on a wide range of projects. From web apps to android
        apps. Here are some of my projects.
      </p>
      <div className="flex flex-col items-center justify-between w-full gap-[18px]">
        {projects.map((el, idx) => {
          return <Project key={idx} el={el} idx={idx}></Project>;
        })}
      </div>
    </section>
  );
}
