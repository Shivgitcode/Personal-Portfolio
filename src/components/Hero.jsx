import React from "react";
import { myimage } from "../assets";
import HeroBgAnimation from "../HeroBgAnimation-20231230T113946Z-001/HeroBgAnimation";
import Typed from "react-typed";

export default function Hero() {
  return (
    <section className="flex flex-col w-full justify-evenly items-center relative top-28 px-[16px] ">
      <div className="absolute -top-16">
        <HeroBgAnimation></HeroBgAnimation>
      </div>
      <div className="w-[300px] h-[300px] mb-[30px]">
        <img
          src={myimage}
          alt=""
          className="w-full h-full rounded-full object-cover border-2 border-fuchsia-500"
        />
      </div>

      <h1 className="text-[#f2f3f4] text-[40px] leading-[48px] font-bold font-poppins text-center mb-[8px] max-w-[413px]">
        Hi, I am Shivansh Aggarwal
      </h1>
      <p className="text-[22px] font-semibold font-poppins leading-[48px] text-center text-[#f2f3f4] mb-[16px]">
        I am a{" "}
        <span className="text-[#854ce6]">
          <Typed
            strings={["Web Developer"]}
            typeSpeed={130}
            backSpeed={50}
            loop
          ></Typed>
        </span>
      </p>
      <p className="text-center text-[16px] leading-[32px] text-[#f2f3f4]/60 font-normal font-poppins mb-[42px] ">
        I am a motivated and versatile individual, always eager to take on new
        challenges. With a passion for learning I am dedicated to delivering
        high-quality results. With a positive attitude and a growth mindset, I
        am ready to make a meaningful contribution and achieve great things.
      </p>
      <button className="font-poppins text-white font-medium text-[16px] text-center leading-[32px] rounded-[20px] py-[12px] bg-gradient-to-r from-fuchsia-500 to-purple-500 w-full max-w-[400px] hover:scale-105 transition-all ">
        Check Resume
      </button>
    </section>
  );
}
