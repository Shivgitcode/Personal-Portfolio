import React from "react";

export default function SkillCard({ el }) {
  return (
    <div className="flex flex-col items-center justify-between max-w-[400px] px-[36px] py-[10px] rounded-[16px] bg-[#171721] border-[1px] border-[#854CE6] bg-shadow">
      <h2 className="text-[28px] text-[#b1b2b3] text-center mb-[20px] font-semibold ">
        {el.id}
      </h2>
      <ul className="flex flex-row flex-wrap max-w-[326px] mb-[20px] gap-[12px] justify-center">
        {el.skill.map((item) => {
          return (
            <li className="flex flex-row justify-between items-center px-[12px] py-[8px] font-poppins text-[14px] text-[#f2f3f4]/50 rounded-[12px] border-[1px] border-[#f2f3f4]/50 gap-[8px]">
              <img src={item.logo} alt="" width={"24px"} height={"24px"} />{" "}
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
