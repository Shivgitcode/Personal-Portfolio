import { skills } from "../constants";
import SkillCard from "./SkillCard";
export default function Skills() {
  return (
    <div
      className="flex flex-col items-center justify-evenly pt-6 lg:w-[60%] mx-auto "
      id="Skills"
    >
      <h1 className="text-[32px] lg:text-[42px] lg:mt-[20px] text-center mt-[12px] text-[#f2f3f4] font-semibold font-poppins ">
        Skills
      </h1>
      <p className="text-[16px] lg:text-[18px] text-center text-[#b1b2b3] font-poppins font-normal mt-[5px] max-w-[95%] lg:max-w-[50%] mb-[48px]">
        Here are some of my skills on which I have been working on for the past
        1 year
      </p>
      <div className="flex flex-col justify-evenly items-center gap-[30px] lg:flex-row lg:flex-wrap">
        {skills.map((el, idx) => {
          return <SkillCard key={el.id} el={el}></SkillCard>;
        })}
      </div>
    </div>
  );
}
