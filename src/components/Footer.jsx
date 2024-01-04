import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { navlinks, socialmedia } from "../constants";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex flex-col justify-around items-center gap-3 lg:w-[60%] mx-auto">
      <h2 className="font-poppins text-[#854ce6] text-[20px] font-semibold">
        Shivansh Aggarwal
      </h2>
      <ul className="flex flex-row justify-center w-full gap-[16px] lg:gap-x-[32px] mt-[8px]">
        {navlinks.map((link) => {
          return (
            <a href={`#${link}`}>
              <li className="text-[16px] lg:text-[19.2px] font-poppins font-medium text-[#f2f3f4] cursor-pointer hover:text-[#854ce6] transition-all">
                {link}
              </li>
            </a>
          );
        })}
      </ul>
      <ul className="flex flex-row gap-[32px] mt-[16px]">
        <Link to={socialmedia[0]}>
          <li className="w-[24px] group">
            <FaInstagram
              fontSize={"24px"}
              fill="#f2f3f4"
              className=" group-hover:fill-[#854ce6] transition-all duration-300"
            ></FaInstagram>
          </li>
        </Link>
        <Link to={socialmedia[1]}>
          <li className="w-[24px] group">
            <FaGithub
              fontSize={"24px"}
              fill="#f2f3f4"
              className=" group-hover:fill-[#854ce6] transition-all duration-300"
            ></FaGithub>
          </li>
        </Link>
        <Link to={socialmedia[2]}>
          {" "}
          <li className="w-[24px] group">
            <FaLinkedin
              fontSize={"24px"}
              fill="#f2f3f4"
              className=" group-hover:fill-[#854ce6] transition-all duration-300"
            ></FaLinkedin>
          </li>
        </Link>
        <Link to={socialmedia[3]}>
          <li className="w-[24px]  group">
            <FaTwitter
              fontSize={"24px"}
              fill="#f2f3f4"
              className=" group-hover:fill-[#854ce6] transition-all duration-300"
            ></FaTwitter>
          </li>
        </Link>
      </ul>
      <p className="font-poppins font-normal text-[14.4px] text-center mt-[24px] text-[#f2f3f4]">
        © 2024 Shivansh Aggarwal. All rights reserved.
      </p>
    </div>
  );
}
