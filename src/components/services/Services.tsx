import React from "react";

import Image from "next/image";

import xd from "../../png/xd.png";
import Button from "../button/Button";
import icon from "../../svg/icon.svg";
import figma from "../../png/figma.png";
import laptop from "../../svg/laptop-img.svg";
import Photoshop from "../../png/photoshop.png";
import Lightroom from "../../png/lightroom.png";
import Illustrator from "../../png/Illustrator.png";

const Services = () => {
  return (
    <div className="px-[16rem] max-[1700px]:px-[6rem] max-[1150px]:px-[2rem] max-[500px]:px-[20px] pb-10 max-[450px]:pb-6 space-y-5 max-[550px]:space-y-3">
      <div className="px-9 max-[600px]:px-4 py-4 bg-[#292929] rounded-[20px] max-[600px]:rounded-[10px] mb-12 max-[550px]:mb-8">
        <p className="text-[20px] text-[#ffffff] font-[500]">Explore <span className="text-[#f05734]">My Services</span>.</p>
      </div>
      <div className="grid grid-cols-3 max-[850px]:grid-cols-2 max-[550px]:grid-cols-1 gap-7 max-[1150px]:gap-4">
        <div className="px-8 max-[1150px]:px-6 py-6 max-[1150px]:py-3 max-[1150px]:pb-5 rounded-[20px] bg-[#292929] space-y-3">
          <Image src={laptop} alt="laptop" className="w-[80px] max-[1150px]:w-[65px] h-[78px]" />
          <p className="text-[22px] max-[1150px]:text-[18px] text-[#ffffff] font-[600]">UI/UX <span className="text-[#f05734]">Design</span></p>
          <p className="text-[#ffffff] text-[15px] max-[1150px]:text-[14px]">We design user interfaces that are visually appealing and easy.</p>
          <Button
            title="UI/UX Design"
            className="hover:bg-[#F05734] bg-transparent hover:text-white text-[#f05734] w-max"
          />
        </div>
        <div className="px-8 max-[1150px]:px-6 py-6 max-[1150px]:py-3 max-[1150px]:pb-5 rounded-[20px] bg-[#292929] space-y-3">
          <Image src={laptop} alt="laptop" className="w-[80px] max-[1150px]:w-[65px] h-[78px]" />
          <p className="text-[22px] max-[1150px]:text-[18px] text-[#ffffff] font-[600]">UI/UX <span className="text-[#f05734]">Design</span></p>
          <p className="text-[#ffffff] text-[15px] max-[1150px]:text-[14px]">We design user interfaces that are visually appealing and easy.</p>
          <Button
            title="UI/UX Design"
            className="hover:bg-[#F05734] bg-transparent hover:text-white text-[#f05734] w-max"
          />
        </div>
        <div className="px-8 max-[1150px]:px-6 py-6 max-[1150px]:py-3 max-[1150px]:pb-5 rounded-[20px] bg-[#292929] space-y-3">
          <Image src={laptop} alt="laptop" className="w-[80px] max-[1150px]:w-[65px] h-[78px]" />
          <p className="text-[22px] max-[1150px]:text-[18px] text-[#ffffff] font-[600]">UI/UX <span className="text-[#f05734]">Design</span></p>
          <p className="text-[#ffffff] text-[15px] max-[1150px]:text-[14px]">We design user interfaces that are visually appealing and easy.</p>
          <Button
            title="UI/UX Design"
            className="hover:bg-[#F05734] bg-transparent hover:text-white text-[#f05734] w-max"
          />
        </div>
      </div>
      <div className="flex justify-between items-center max-[380px]:items-start max-[380px]:gap-2 max-[380px]:flex-col">
        <div className="flex gap-2 items-center">
          <Image src={icon} alt="icon" className="w-[20px] h-[25px]" />
          <p className="text-[22px] max-[550px]:text-[20px] text-[#f05734] font-[600]">Creative <span className="text-[#ffffff]">Toolkit</span></p>
        </div>
        <Button
          title="Let's Get Started"
          className="bg-[#F05734] hover:bg-transparent text-white hover:text-[#f05734]"
          image={
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="20" className="group-hover:fill-[#f05734] duration-700 max-[500px]:h-[16px] max-[500px]:w-[20px]" viewBox="0 0 1024 1024">
              <path d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z" />
            </svg>
          }
        />
      </div>
      <p className="text-[25px] max-[550px]:text-[20px] text-[#ffffff] font-[600]">My Toolbox For <span className="text-[#f05734]">innovation</span>.</p>
      <div className="grid grid-cols-3 max-[800px]:grid-cols-2 max-[550px]:grid-cols-1 gap-6 max-[850px]:gap-3">
        <div className="p-3 border border-[#292929] rounded-[10px] flex gap-3">
          <Image src={figma} alt="figma" className="w-[60px] max-[1150px]:w-[50px] h-[60px] max-[1150px]:h-[50px]" />
          <div>
            <p className="text-[#f05734] text-[20px] max-[1150px]:text-[18px] font-[600]">Figma</p>
            <p className="text-[#c1c1c1] max-[1150px]:text-[14px]">Design Tool</p>
          </div>
        </div>
        <div className="p-3 border border-[#292929] rounded-[10px] flex gap-3">
          <Image src={Illustrator} alt="Illustrator" className="w-[60px] max-[1150px]:w-[50px] h-[60px] max-[1150px]:h-[50px]" />
          <div>
            <p className="text-[#f05734] text-[20px] max-[1150px]:text-[18px] font-[600]">Adobe Illustrator</p>
            <p className="text-[#c1c1c1] max-[1150px]:text-[14px]">Design Tool</p>
          </div>
        </div>
        <div className="p-3 border border-[#292929] rounded-[10px] flex gap-3">
          <Image src={Photoshop} alt="Photoshop" className="w-[60px] max-[1150px]:w-[50px] h-[60px] max-[1150px]:h-[50px]" />
          <div>
            <p className="text-[#f05734] text-[20px] max-[1150px]:text-[18px] font-[600]">Adobe Photoshop</p>
            <p className="text-[#c1c1c1] max-[1150px]:text-[14px]">Design Tool</p>
          </div>
        </div>
        <div className="p-3 border border-[#292929] rounded-[10px] flex gap-3">
          <Image src={xd} alt="xd" className="w-[60px] max-[1150px]:w-[50px] h-[60px] max-[1150px]:h-[50px]" />
          <div>
            <p className="text-[#f05734] text-[20px] max-[1150px]:text-[18px] font-[600]">Adobe Xd</p>
            <p className="text-[#c1c1c1] max-[1150px]:text-[14px]">Design Tool</p>
          </div>
        </div>
        <div className="p-3 border border-[#292929] rounded-[10px] flex gap-3">
          <Image src={Lightroom} alt="Lightroom" className="w-[60px] max-[1150px]:w-[50px] h-[60px] max-[1150px]:h-[50px]" />
          <div>
            <p className="text-[#f05734] text-[20px] max-[1150px]:text-[18px] font-[600]">Adobe Lightroom</p>
            <p className="text-[#c1c1c1] max-[1150px]:text-[14px]">Design Tool</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;