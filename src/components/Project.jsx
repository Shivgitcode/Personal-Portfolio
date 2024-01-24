import React from "react";
import { useContext } from "react";
import { AppProvider } from "../context/AppProvider";
import { motion } from "framer-motion";

export default function Project({ el, idx }) {
  const { handleCard } = useContext(AppProvider);
  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={variants}
      initial={"hidden"}
      whileInView={"visible"}
      transition={{ ease: "anticipate", duration: 1 }}
      viewport={{ once: true }}
      className="max-w-[330px] px-[20px] py-[26px] bg-[#171721] rounded-[10px] flex flex-col items-start gap-[14px] hover:-translate-y-2 hover:bg-shadow3 transition-all duration-300 bg-shadow2 min-h-[432px]"
      onClick={() => handleCard(idx)}
    >
      <div className="w-full h-full">
        <img
          src={el.image}
          alt=""
          className="w-full h-[180px] rounded-[10px] object-cover"
        />
      </div>
      <ul className="flex flex-row flex-wrap gap-[8px] justify-start items-center  max-w-[290px] mt-[4px]">
        {el.tags.map((tag, idx) => {
          return (
            <li
              key={idx}
              className="font-poppins text-[12px] px-[8px] py-[2px] text-[#854ce6] bg-[#854ce6]/[8.20%] rounded-[10px] "
            >
              {tag}
            </li>
          );
        })}
      </ul>
      <h2 className="text-[20px] text-[#b1b2b3] font-poppins w-full font-medium">
        {el.title}
      </h2>
      <p className=" line-clamp-3 text-[16px] text-[#b1b2b3]/60 font-medium ">
        {el.desc}
      </p>
    </motion.div>
  );
}
