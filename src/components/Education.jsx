import { education } from "../constants";
import EducationCard from "./EducationCard";
export default function Education() {
  return (
    <div
      className="flex flex-col justify-between w-full h-screen items-center px-[17px] relative lg:w-[60%] mx-auto mb-[5px] lg:mb-[60px]"
      id="Education"
    >
      <h2 className="font-poppins font-semibold text-[32px] lg:text-[42px] w-full text-center mt-[24px] mb-[24px] text-[#f2f3f4] lg:mt-[34px]">
        Education
      </h2>
      <p className="font-poppins font-normal text-[16px] w-full text-center text-[#b1b2b3] mb-[35px] lg:max-w-[60%] lg:text-[18px]">
        My education has been a journey of self-discovery and growth. My
        educational details are as follows.
      </p>
      <div className="flex flex-col w-full h-full justify-start lg:mt-[10px] items-end lg:items-center px-[16px] py-[6px]  max-w-[406px] ml-auto lg:ml-0 lg:max-w-fit">
        {education.map((el, idx) => {
          return <EducationCard key={idx} el={el}></EducationCard>;
        })}
      </div>
    </div>
  );
}
