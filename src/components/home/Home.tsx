import React from "react";

import Image from "next/image";

import Button from "@/components/button/Button";
import borderTop from "../../png/border-top.png";
import designer from "../../png/designer-img.png";
import borderBottom from "../../png/border-bottom.png";

type props = {
  contactClick: () => void;
}

const Home = ({ contactClick }: props) => {

  const handleClick = (section: string, callback: () => void) => {
    callback();
  };

  return (
    <div className="relative h-[100vh] max-[700px]:h-full px-[16rem] max-[1700px]:px-[6rem] max-[1150px]:px-[2rem] max-[500px]:px-[20px] pt-20 pb-6 max-[700px]:pb-16 flex max-[700px]:flex-col items-center max-[700px]:items-start justify-between max-[700px]:gap-1">
      <div className="w-[60%] max-[700px]:w-full">
        <p className="text-white text-[40px] max-[1150px]:text-[30px] leading-[50px] max-[1150px]:leading-[40px] max-[500px]:leading-[33px]"> <span style={{ fontFamily: "cursive" }}>This is</span> <br /> <span className="text-[#F05734] text-[50px] max-[1150px]:text-[40px] max-[500px]:text-[35px] font-[500]">FAISAL JAVED</span>.</p>
        <h1 className="my-2 max-[1150px]:my-1" aria-label="Hi! I'm a developer">
          <span className="typingTypewriting nocaret text-[#F05734] font-[600] text-[45px] max-[1150px]:text-[35px] max-[850px]:text-[27px]"></span>
        </h1>
        <p className="text-[#C1C1C1] text-[14px] max-[1150px]:text-[13px] max-[500px]:text-[12px] w-[90%] max-[700px]:w-full">A UI/UX Designer blends creativity with functionality to craft seamless digital experiences. From branding and logo design to mockups and intuitive interfaces, they shape visually appealing and user-friendly designs that enhance engagement and brand identity.</p>
        <div className="flex gap-5 max-[500px]:gap-3 my-5">
          <Button
            title="View my works"
            className="bg-[#F05734] hover:bg-transparent text-white hover:text-[#f05734]"
            image={
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="20" className="group-hover:fill-[#f05734] duration-700 max-[500px]:h-[16px] max-[500px]:w-[20px]" viewBox="0 0 1024 1024">
                <path d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z" />
              </svg>
            }
          />
          <Button
            title="Contact me"
            onClick={() => handleClick("contact", contactClick)}
            className="hover:bg-[#F05734] bg-transparent text-[#f05734] hover:text-[#ffffff]"
            image={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" className="fill-[#f05734] group-hover:fill-[#ffffff] duration-700 max-[500px]:h-[16px] max-[500px]:w-[20px]" viewBox="0 0 1024 1024">
                <path d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z" />
              </svg>
            }
          />
        </div>
        <div className="absolute bottom-0 flex gap-3 my-7 max-[1150px]:my-5 max-[700px]:my-3 wave-icon wave-large wave-small">
          <div className="bg-[#000000] rounded-[5px] p-2 max-[700px]:p-1 hover:bg-[#F05734] group teansation-all duration-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#F05734" width="24" height="24" className="group-hover:fill-[#ffffff] duration-700 max-[700px]:w-[22px] max-[700px]:h-[22px]" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" /></svg>
          </div>
          <div className="bg-[#000000] rounded-[5px] p-2 max-[700px]:p-1 hover:bg-[#F05734] group teansation-all duration-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#F05734" width="24" height="24" className="group-hover:fill-[#ffffff] duration-700 max-[700px]:w-[22px] max-[700px]:h-[22px]" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" /></svg>
          </div>
          <div className="bg-[#000000] rounded-[5px] p-2 max-[700px]:p-1 hover:bg-[#F05734] group teansation-all duration-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#F05734" width="24" height="24" className="group-hover:fill-[#ffffff] duration-700 max-[700px]:w-[22px] max-[700px]:h-[22px]" viewBox="0 0 24 24"><path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" /></svg>
          </div>
          <div className="bg-[#000000] rounded-[5px] p-2 max-[700px]:p-1 hover:bg-[#F05734] group teansation-all duration-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#F05734" width="24" height="24" className="group-hover:fill-[#ffffff] duration-700 max-[700px]:w-[22px] max-[700px]:h-[22px]" viewBox="0 0 16 16"><path d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z" /></svg>
          </div>
        </div>
      </div>
      <div className="relative p-10 max-[800px]:p-6 flex justify-end h-[30rem] max-[1150px]:h-[25rem] max-[800px]:h-[23rem] w-[40%] max-[700px]:w-full">
        <Image src={borderTop} alt="border" className="absolute top-0 left-0 border-top max-[800px]:w-[60px]" />
        <Image src={borderBottom} alt="border" className="absolute right-0 bottom-0 border-bottom max-[800px]:w-[60px]" />
        <Image src={designer} alt="designer" className="designer-img w-[100%]" />
      </div>
    </div>
  );
};

export default Home;