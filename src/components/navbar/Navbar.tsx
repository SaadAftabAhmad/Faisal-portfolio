import React, { useState } from "react";

import Image from "next/image";

import logo from "../../png/LOGO.png";

type props = {
  homeClick: () => void;
  aboutClick: () => void;
  skillsClick: () => void;
  servicesClick: () => void;
  portfolioClick: () => void;
  sidebarOpenClick: () => void;
}

const Navbar = ({ sidebarOpenClick, homeClick, aboutClick, skillsClick, servicesClick, portfolioClick }: props) => {
  const [active, setActive] = useState("home");

  const handleClick = (section: string, callback: () => void) => {
    setActive(section);
    callback();
  }

  return (
    <div className="fixed top-5 max-[1150px]:top-3 z-[1000] w-full px-[16rem] max-[1700px]:px-[6rem] max-[1150px]:px-[2rem] max-[500px]:px-[15px]">
      <div className="w-full flex justify-between items-center bg-[#F05734] px-5 max-[1150px]:px-4 max-[500px]:px-3 py-2 rounded-full">
        <Image src={logo} alt="logo" className="max-[1150px]:h-10 max-[1150px]:w-[150px]" />
        <ul className="flex items-center gap-2 max-[1150px]:gap-1 max-[650px]:hidden">
          <li
            className={`text-[16px] max-[1150px]:text-[12px] font-[600] cursor-pointer p-2 max-[1150px]:py-1 rounded-[8px] max-[1150px]:rounded-[5px] transation-all duration-500 ${active === "home" ? "text-[#fc2020]" : "text-[#ffffff] hover:text-[#fc2020]"}`}
            onClick={() => handleClick("home", homeClick)}
          >
            Home
          </li>
          <li
            className={`text-[16px] max-[1150px]:text-[12px] font-[600] cursor-pointer p-2 max-[1150px]:py-1 rounded-[8px] max-[1150px]:rounded-[5px] transation-all duration-500 ${active === "about" ? "text-[#fc2020]" : "text-[#ffffff] hover:text-[#fc2020]"}`}
            onClick={() => handleClick("about", aboutClick)}
          >
            About
          </li>
          <li
            className={`text-[16px] max-[1150px]:text-[12px] font-[600] cursor-pointer p-2 max-[1150px]:py-1 rounded-[8px] max-[1150px]:rounded-[5px] transation-all duration-500 ${active === "services" ? "text-[#fc2020]" : "text-[#ffffff] hover:text-[#fc2020]"}`}
            onClick={() => handleClick("services", servicesClick)}
          >
            Services
          </li>
          <li
            className={`text-[16px] max-[1150px]:text-[12px] font-[600] cursor-pointer p-2 max-[1150px]:py-1 rounded-[8px] max-[1150px]:rounded-[5px] transation-all duration-500 ${active === "skills" ? "text-[#fc2020]" : "text-[#ffffff] hover:text-[#fc2020]"}`}
            onClick={() => handleClick("skills", skillsClick)}
          >
            Skills
          </li>
          <li
            className={`text-[16px] max-[1150px]:text-[12px] font-[600] cursor-pointer p-2 max-[1150px]:py-1 rounded-[8px] max-[1150px]:rounded-[5px] transation-all duration-500 ${active === "portfolio" ? "text-[#fc2020]" : "text-[#ffffff] hover:text-[#fc2020]"}`}
            onClick={() => handleClick("portfolio", portfolioClick)}
          >
            Portfolio
          </li>
        </ul>

        <div className="hidden max-[650px]:flex p-1 bg-[#ffffff] rounded-[5px] group cursor-pointer max-[650px]:mr-2 max-[400px]:mr-1" onClick={sidebarOpenClick}>
          <svg
            width="27"
            height="27"
            fill="#f05734"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="max-[400px]:w-[23px] max-[400px]:h-[23px]"
          >
            <path d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m1 5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z" />
          </svg>
        </div>

      </div>
    </div >
  );
};

export default Navbar;