import { FaBars } from "react-icons/fa6";
import { navlinks } from "../constants";
import { useContext } from "react";
import { AppProvider } from "../context/AppProvider";
import { Link } from "react-router-dom";
export default function Navbar() {
  const { show, setShow } = useContext(AppProvider);

  function handleClick() {
    setShow(!show);
  }

  return (
    <nav className="flex flex-row w-[85%] xl:w-[60%] justify-between items-center mx-auto relative py-3">
      <h1 className="text-white font-bold font-poppins text-xl xl:flex-1">
        Shivansh
      </h1>
      <button onClick={handleClick} className="xl:hidden">
        <FaBars fill="white" fontSize="20px" />
      </button>
      <ul
        className={`absolute flex flex-col items-start top-12 w-screen -left-12 bg-[#191924]/60 rounded-b-2xl px-[40px] pt-[12px] pb-[24px] pl-[49px] ${
          show ? "opacity-0 invisible" : "opacity-100"
        } transition-all shadow-lg  xl:hidden`}
      >
        {navlinks.map((el, indx) => {
          return (
            <li
              key={indx}
              className="text-[16px] font-poppins font-semibold text-[#f2f3f4] mb-[16px] cursor-pointer hover:text-[#854ce6] transition-all"
            >
              {el}
            </li>
          );
        })}
        <Link to="https://github.com/Shivgitcode">
          <button className="px-[16px] py-[10px] text-white font-poppins text-[14px] bg-[#854ce6] rounded-[20px]">
            Github Profile
          </button>
        </Link>
      </ul>

      <ul
        className={`hidden lg:flex flex-row justify-between items-center flex-1 gap-x-[32px] max-h-fit`}
      >
        {navlinks.map((el, indx) => {
          return (
            <li
              key={indx}
              className="text-[16px] font-poppins font-semibold text-[#f2f3f4] cursor-pointer hover:text-[#854ce6] transition-all"
            >
              {el}
            </li>
          );
        })}
      </ul>
      <div className="hidden xl:flex flex-1">
        <button className="w-full max-w-[149px] px-[16px] py-[10px] font-poppins text-[14px] border-[1px] border-[#854ce6] text-[#854ce6] rounded-[20px] ml-auto hover:text-white hover:bg-[#854ce6] transition-all duration-200">
          Github Profile
        </button>
      </div>
    </nav>
  );
}
