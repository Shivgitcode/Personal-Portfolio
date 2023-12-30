import { FaBars } from "react-icons/fa6";
import { navlinks } from "../constants";
import { useContext } from "react";
import { AppProvider } from "../context/AppProvider";
export default function Navbar() {
  const { show, setShow } = useContext(AppProvider);

  function handleClick() {
    setShow(!show);
  }

  return (
    <nav className="flex flex-row w-[85%] justify-between items-center mx-auto relative py-3">
      <h1 className="text-white font-bold font-poppins text-xl">Shivansh</h1>
      <button onClick={handleClick}>
        <FaBars fill="white" fontSize="20px" />
      </button>
      <ul
        className={`absolute flex flex-col items-start top-12 w-screen -left-12 bg-[#191924]/60 rounded-b-2xl px-[40px] pt-[12px] pb-[24px] ${
          show ? "opacity-0" : "opacity-100"
        } transition-all shadow-lg`}
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
        <button className="px-[16px] py-[10px] text-white font-poppins text-[14px] bg-[#854ce6] rounded-[20px]">
          Github Profile
        </button>
      </ul>
    </nav>
  );
}
