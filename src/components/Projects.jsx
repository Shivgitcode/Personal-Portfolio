import { useContext } from "react";
import { projects } from "../constants";
import Project from "./Project";
import ProjectDetails from "./ProjectDetails";
import { AppProvider } from "../context/AppProvider";
export default function Projects() {
  return (
    <section
      className=" px-[17px] flex flex-col justify-evenly items-center w-full h-full lg:w-[60%] mx-auto lg:pb-[100px] lg:pt-[10px]"
      id="Projects"
    >
      <h1 className="font-poppins font-semibold text-[32px] lg:text-[42px] w-full text-center mt-[24px] mb-[24px]">
        Projects
      </h1>
      <p className="font-poppins font-normal text-[16px] w-full text-center text-[#b1b2b3] mb-[35px] lg:max-w-[60%] lg:text-[18px]">
        I have worked on a wide range of projects. From web apps to android
        apps. Here are some of my projects.
      </p>
      <div className="flex flex-col  justify-center items-center w-full gap-[18px] lg:flex-row lg:flex-wrap">
        {projects.map((el, idx) => {
          return <Project key={idx} el={el} idx={idx}></Project>;
        })}
      </div>
    </section>
  );
}
