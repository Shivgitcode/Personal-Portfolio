import React from "react";
import { myimage } from "../assets";
import HeroBgAnimation from "../HeroBgAnimation-20231230T113946Z-001/HeroBgAnimation";
import Typed from "react-typed";

export default function Hero() {
  return (
    <section
      className="flex flex-col w-full justify-evenly items-center relative top-28 px-[16px] lg:flex-row-reverse lg:item lg:w-[60%] mx-auto lg:justify-between lg:px-[0px] lg:my-[35px] "
      id="About"
    >
      <div className="absolute -top-16 lg:-right-24">
        <HeroBgAnimation></HeroBgAnimation>
      </div>
      <div className="w-[300px] h-[300px] z-10 lg:w-[400px] lg:h-[400px] mb-[30px] lg:flex-1 lg:z-10">
        <img
          src={myimage}
          alt=""
          className="w-full h-full lg:max-w-[400px] lg:max-h-[400px] lg:ml-auto rounded-full object-cover border-2 border-fuchsia-500"
        />
      </div>
      <div className="flex flex-col items-center lg:items-start flex-1  ">
        <h1 className="text-[#f2f3f4] text-[40px] lg:text-[50px] lg:text-start leading-[48px] font-bold font-poppins text-center mb-[8px] max-w-[413px]">
          Hi, I am Shivansh Aggarwal
        </h1>
        <p className="text-[22px] lg:text-[32px] lg:leading-[68px]  font-semibold font-poppins leading-[48px] text-center text-[#f2f3f4] mb-[16px] lg:text-start">
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
        <p className="text-center lg:text-start text-[16px] lg:text-[20px] leading-[32px] text-[#f2f3f4]/60 font-normal font-poppins mb-[42px] ">
          I am a motivated and versatile individual, always eager to take on new
          challenges. With a passion for learning I am dedicated to delivering
          high-quality results. With a positive attitude and a growth mindset, I
          am ready to make a meaningful contribution and achieve great things.
        </p>
        <button className="font-poppins text-white font-medium text-[16px] text-center leading-[32px] rounded-[20px] py-[12px] bg-gradient-to-r from-fuchsia-500 to-purple-500 w-full max-w-[400px] hover:scale-105 transition-all ">
          Check Resume
        </button>
      </div>
    </section>
  );
}
