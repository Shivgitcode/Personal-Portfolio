import React from "react";
import { motion } from "framer-motion";

export default function SkillCard({ el }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-between max-w-[400px] px-[36px] py-[10px] rounded-[16px] bg-[#171721] border-[1px] border-[#854CE6] bg-shadow lg:min-w-[500px] lg:min-h-[360px] lg:justify-start"
    >
      <h2 className="text-[28px] text-[#b1b2b3] text-center mb-[20px] font-semibold ">
        {el.id}
      </h2>
      <ul className="flex flex-row flex-wrap max-w-[326px] mb-[20px] gap-[12px] justify-center lg:items-center">
        {el.skill.map((item) => {
          return (
            <li className="flex flex-row justify-between items-center px-[12px] py-[8px] font-poppins text-[14px] text-[#f2f3f4]/50 rounded-[12px] border-[1px] border-[#f2f3f4]/50 gap-[8px]">
              <img src={item.logo} alt="" width={"24px"} height={"24px"} />{" "}
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}
