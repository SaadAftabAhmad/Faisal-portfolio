import React, { useState } from "react";

import Image from "next/image";

import logo from "../../png/logo-white.png";
import { motion, AnimatePresence } from "framer-motion";

type props = {
  isOpen: boolean;
  onClose: () => void;
  homeClick: () => void;
  aboutClick: () => void;
  skillsClick: () => void;
  servicesClick: () => void;
  portfolioClick: () => void;
}

const Sidebar = ({ isOpen, onClose, homeClick, aboutClick, skillsClick, servicesClick, portfolioClick }: props) => {

  const [active, setActive] = useState("home");

  const handleClick = (section: string, callback: () => void) => {
    setActive(section);
    callback();
  };

  return (
    <AnimatePresence>
      {isOpen &&
        <>
          <motion.div
            key="sidebar"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 80 }}
            className={`fixed top-0 right-0 w-full h-full bg-[#000000] z-[1000] shadow-2xl`}
          >
            <div className="flex justify-between items-center py-3 px-6 max-[400px]:px-4 border-b border-white/10">
              <Image src={logo} alt="logo" className="h-10 w-[160px]" />
              <button onClick={onClose} className="bg-[#F05734] p-2 rounded-[5px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 256 256">
                  <path fill="#ffffff" d="M224.319 17.102c6.28 5.496 7.018 14.97 1.745 21.367l-.3.352l-77.707 88.791l77.707 88.791c5.599 6.397 4.951 16.121-1.445 21.72c-6.28 5.496-15.769 4.972-21.41-1.103l-.31-.343l-74.996-85.694l-74.995 85.694c-5.599 6.396-15.323 7.044-21.72 1.445c-6.28-5.496-7.018-14.97-1.745-21.366l.3-.353l77.706-88.79L29.443 38.82c-5.599-6.397-4.951-16.121 1.446-21.72c6.28-5.496 15.768-4.972 21.41 1.103l.309.344l74.995 85.692L202.6 18.548c5.598-6.397 15.322-7.045 21.719-1.446" />
                </svg>
              </button>
            </div>
            <motion.ul initial="hidden" animate="visible" className="flex flex-col gap-1 p-5 max-[400px]:px-4">
              <motion.li
                initial={{ opacity: 0, x: 110 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                onClick={() => handleClick("home", homeClick)}
                className={`flex items-center justify-between py-3 px-4 rounded-[5px] cursor-pointer transition-all duration-700 ${active === "home" ? "bg-[#F05734]/20 text-[#F05734]" : "text-white/80 hover:bg-white/10 hover:text-white"}`}
              >
                <span className="text-[18px] font-[500]">Home</span>
                {active === "home" && (
                  <motion.div layoutId="dot" className="w-2 h-2 rounded-full bg-[#F05734]" />
                )}
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 110 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                onClick={() => handleClick("about", aboutClick)}
                className={`flex items-center justify-between py-3 px-4 rounded-[5px] cursor-pointer transition-all duration-700 ${active === "about" ? "bg-[#F05734]/20 text-[#F05734]" : "text-white/80 hover:bg-white/10 hover:text-white"}`}
              >
                <span className="text-[18px] font-[500]">About</span>
                {active === "about" && (
                  <motion.div layoutId="dot" className="w-2 h-2 rounded-full bg-[#F05734]" />
                )}
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 110 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                onClick={() => handleClick("services", servicesClick)}
                className={`flex items-center justify-between py-3 px-4 rounded-[5px] cursor-pointer transition-all duration-700 ${active === "services" ? "bg-[#F05734]/20 text-[#F05734]" : "text-white/80 hover:bg-white/10 hover:text-white"}`}
              >
                <span className="text-[18px] font-[500]">Services</span>
                {active === "services" && (
                  <motion.div layoutId="dot" className="w-2 h-2 rounded-full bg-[#F05734]" />
                )}
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 110 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                onClick={() => handleClick("skills", skillsClick)}
                className={`flex items-center justify-between py-3 px-4 rounded-[5px] cursor-pointer transition-all duration-700 ${active === "skills" ? "bg-[#F05734]/20 text-[#F05734]" : "text-white/80 hover:bg-white/10 hover:text-white"}`}
              >
                <span className="text-[18px] font-[500]">Skills</span>
                {active === "skills" && (
                  <motion.div layoutId="dot" className="w-2 h-2 rounded-full bg-[#F05734]" />
                )}
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 110 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                onClick={() => handleClick("portfolio", portfolioClick)}
                className={`flex items-center justify-between py-3 px-4 rounded-[5px] cursor-pointer transition-all duration-700 ${active === "portfolio" ? "bg-[#F05734]/20 text-[#F05734]" : "text-white/80 hover:bg-white/10 hover:text-white"}`}
              >
                <span className="text-[18px] font-[500]">Portfolio</span>
                {active === "portfolio" && (
                  <motion.div layoutId="dot" className="w-2 h-2 rounded-full bg-[#F05734]" />
                )}
              </motion.li>
            </motion.ul>
          </motion.div>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#1d1d1d] z-[999] backdrop-blur-sm"
            onClick={onClose}
          />
        </>
      }
    </AnimatePresence>
  );
};

export default Sidebar;