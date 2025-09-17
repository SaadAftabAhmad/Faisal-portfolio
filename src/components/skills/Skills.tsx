'use client';
import React, { useEffect, useRef } from "react";

import Image from "next/image";

import icon from "../../svg/icon.svg";
import Button from "../button/Button";

const Skills = () => {

  const countersRef = useRef<HTMLParagraphElement[]>([]);

  useEffect(() => {
    const startCount = (el: HTMLElement, target: number) => {
      let count = 0;
      const increment = Math.ceil(target / 50);

      const update = () => {
        count += increment;
        if (count < target) {
          el.textContent = count.toString();
          requestAnimationFrame(update);
        } else {
          el.textContent = target.toString() + "+";
        }
      };

      update();
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const targetAttr = el.getAttribute("data-target");
            const target = targetAttr ? parseInt(targetAttr) : 0;

            if (!isNaN(target)) {
              startCount(el, target);
              obs.unobserve(el);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    countersRef.current.forEach((el) => {
      if (el && el.dataset && el.dataset.target) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="px-[16rem] max-[1700px]:px-[6rem] max-[1150px]:px-[2rem] max-[500px]:px-[20px] pb-10 max-[450px]:pb-6 space-y-8 max-[550px]:space-y-3">
      <div className="px-9 max-[600px]:px-4 py-4 bg-[#292929] rounded-[20px] max-[600px]:rounded-[10px] mb-10 max-[550px]:mb-6">
        <p className="text-[20px] text-[#ffffff] font-[500]">My <span className="text-[#f05734]">Experiences & Skills</span>.</p>
      </div>
      <div className="grid grid-cols-2 max-[750px]:grid-cols-1 gap-20 max-[950px]:gap-5 items-center">
        <div className="flex flex-col gap-4 max-[750px]:gap-3">
          <div className="flex gap-2 items-center">
            <Image src={icon} alt="icon" className="w-[20px] h-[25px]" />
            <p className="text-[22px] max-[550px]:text-[20px] text-[#f05734] font-[600]">My <span className="text-[#ffffff]">Experiences</span>.</p>
          </div>
          <p className="text-[33px] max-[550px]:text-[25px] text-[#ffffff] font-[600]">PROUD <span className="text-[#f05734]">MOVEMENTS</span>.</p>
          <p className="text-[#ffffff] text-[15px]">We’re a full-service design agency specializing in branding, web design, and creative strategies that elevate businesses.</p>
          <Button
            title="Let's Get Started"
            className="bg-[#F05734] hover:bg-transparent text-white hover:text-[#f05734] w-max"
            image={
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="20" className="group-hover:fill-[#f05734] duration-700 max-[500px]:h-[16px] max-[500px]:w-[20px]" viewBox="0 0 1024 1024">
                <path d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z" />
              </svg>
            }
          />
        </div>
        <div className="grid grid-cols-2 max-[450px]:grid-cols-1 gap-3">
          <div className="pl-5 pr-7 py-3 bg-[#292929] rounded-[10px]">
            <h2
              data-target="01"
              className="text-[27px] max-[400px]:text-[20px] font-[700] text-[#F05734] underline decoration-white"
              ref={el => { if (el) countersRef.current.push(el); }}
            >
              0
            </h2>
            <p className="text-[#ffffff] leading-[17px] text-end">YEARS OF <br /> EXPERIENCE</p>
          </div>
          <div className="pl-5 pr-7 py-3 bg-[#292929] rounded-[10px]">
            <h2
              data-target="03"
              className="text-[27px] max-[400px]:text-[20px] font-[700] text-[#F05734] underline decoration-white"
              ref={el => { if (el) countersRef.current.push(el); }}
            >
              0
            </h2>
            <p className="text-[#ffffff] leading-[17px] text-end">COMPLETE <br /> PROJECTS</p>
          </div>
          <div className="pl-5 pr-7 py-3 bg-[#292929] rounded-[10px]">
            <h2
              data-target="01"
              className="text-[27px] max-[400px]:text-[20px] font-[700] text-[#F05734] underline decoration-white"
              ref={el => { if (el) countersRef.current.push(el); }}
            >
              0
            </h2>
            <p className="text-[#ffffff] leading-[17px] text-end">AWARD <br /> WON</p>
          </div>
          <div className="pl-5 pr-7 py-3 bg-[#292929] rounded-[10px]">
            <h2
              data-target="20"
              className="text-[27px] max-[400px]:text-[20px] font-[700] text-[#F05734] underline decoration-white"
              ref={el => { if (el) countersRef.current.push(el); }}
            >
              0
            </h2>
            <p className="text-[#ffffff] leading-[17px] text-end">HAPPY <br /> CUSTOMER</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <Image src={icon} alt="icon" className="w-[20px] h-[25px]" />
        <p className="text-[22px] max-[550px]:text-[20px] text-[#f05734] font-[600]">My <span className="text-[#ffffff]">Skills</span>.</p>
      </div>
    </div>
  );
};

export default Skills;