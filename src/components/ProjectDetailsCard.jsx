import React from "react";
import { useContext } from "react";
import { AppProvider } from "../context/AppProvider";
import { FiX } from "react-icons/fi";

export default function ProjectDetailsCard({ el }) {
  const { handleCard } = useContext(AppProvider);

  return (
    <div className=" absolute top-0 max-w-[610px] min-h-[811px] px-[20px] py-[20px] mx-[12px] my-[50px] bg-[#171721] rounded-[10px] flex flex-col items-start justify-evenly gap-[10px] bg-shadow2">
      <div
        className="w-fit ml-auto cursor-pointer flex-grow-0"
        onClick={handleCard}
      >
        <FiX stroke="white" fontSize={"30px"} />
      </div>
      <div className="w-full h-full  ">
        <img
          src={el.image}
          alt=""
          className="w-full rounded-[12px] object-cover bg-shadow4"
        />
      </div>
      <h2 className="text-[28px] text-[#f2f3f4] font-poppins w-full font-medium">
        {el.title}
      </h2>
      <ul className="flex flex-row flex-wrap gap-[8px] my-[8px] justify-start items-center w-full">
        {el.tags.map((tag, idx) => {
          return (
            <li
              key={idx}
              className="font-poppins text-[14px] px-[8px] py-[4px] text-[#854ce6] bg-[#854ce6]/[8.20%] rounded-[10px] "
            >
              {tag}
            </li>
          );
        })}
      </ul>

      <p className=" text-[16px] text-[#f2f3f4] font-medium max-w-[558px] my-[8px] mx-[6px]">
        {el.desc}
      </p>
      <div className="flex flex-row w-full justify-between items-center gap-x-[12px]">
        <button className="py-[12px] text-[16px] font-poppins text-[#f2f3f4] font-medium flex-1 px-[16px] rounded-[8px] bg-[#1c1e27]">
          View Code
        </button>
        <button className="py-[12px] px-[16px] rounded-[8px] bg-[#854ce6] text-[16px] font-poppins text-[#f2f3f4] font-medium flex-1">
          View Live App
        </button>
      </div>
    </div>
  );
}
