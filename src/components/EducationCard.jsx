import React from "react";
import { useContext } from "react";
import { AppProvider } from "../context/AppProvider";

export default function EducationCard({ el }) {
  const { showDesc, setShowDesc } = useContext(AppProvider);
  return (
    <div className="px-[16px] py-[12px] relative flex gap-[12px]">
      <div className="flex flex-col justify-evenly items-start p-[10px] rounded-[10px] border-[2px] border-[#6C63FF] max-w-[300px] gap-[10px] group bg-shadow self-start">
        <div className="flex flex-row justify-center items-center gap-[12px]">
          <div className="max-w-[53px] h-fit">
            <img
              src={el.image}
              alt=""
              className="w-full h-full object-contain rounded-[10px]"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="w-full font-poppins font-medium leading-[21px] tracking-[0.15008px] text-left text-[#f2f3f4]/60 text-[14px]">
              {el.name}
            </h2>
            <p className="font-poppins text-[12px] leading-[18px] text-left tracking-[0.15px] text-[#b1b2b3]/60 ">
              {el.degree}
            </p>
            <p className="text-[10px] leading-[15px] tracking-[0.15px] text-left font-poppins font-normal text-[#b1b2b3]/50">
              {el.date}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-[8px]">
          <p className="text-[12px] leading-[18px] tracking-[0.15px] text-left text-[#b1b2b3]/60 font-poppins font-semibold ">
            Grade: <span className="font-medium">{el.Grade}</span>
          </p>
          <p
            className={`text-[12px] leading-[18px] tracking-[0.15px] text-[#f2f3f4]/60 text-left font-poppins line-clamp-4 group-hover:line-clamp-none font-medium  mb-[10px]`}
          >
            {el.desc}
          </p>
        </div>
      </div>
      <div className=" flex flex-col justify-start items-center">
        <span className=" p-[4px] rounded-[50%] border-[2px] border-[#854ce6] my-[11px]"></span>
        <div className=" min-h-[200px] w-[2px] bg-[#854ce6] z-[15] top-0 right-0 flex-1 "></div>
      </div>
    </div>
  );
}
