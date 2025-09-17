'use client';
import React, { useEffect, useRef } from "react";

import Image from "next/image";

import Button from "../button/Button";
import designer from "../../png/designer-img.png";

const About = () => {

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
    <div className="px-[16rem] max-[1700px]:px-[6rem] max-[1150px]:px-[2rem] max-[500px]:px-[20px] pb-10 max-[450px]:pb-6">
      <div className="px-9 max-[600px]:px-4 py-4 bg-[#292929] rounded-[20px] max-[600px]:rounded-[10px] mb-14 max-[450px]:mb-10">
        <p className="text-[20px] text-[#ffffff] font-[500]">About My <span className="text-[#f05734]">Journey</span>.</p>
      </div>
      <div className="grid grid-cols-2 max-[700px]:grid-cols-1 items-center max-[1150px]:gap-12 max-[950px]:gap-6">
        <div className="relative">
          <div className="border-[2px] border-[#f05734] bg-[#000000] rounded-[20px] h-[400px] max-[450px]:h-[300px] w-[85%] max-[1150px]:w-full border-bottom"></div>
          <Image src={designer} alt="designer" className="absolute top-[-10px] left-[-10px] h-full w-[85%] max-[1150px]:w-full designer-img" />
        </div>
        <div className="space-y-6 max-[950px]:space-y-5">
          <p className="text-[20px] text-[#ffffff] font-[500] border-l-[3px] border-[#f05734] rounded-[5px] pl-3">About <span className="text-[#f05734]">Me</span></p>
          <p className="text-[#C1C1C1] text-[14px] max-[950px]:text-[13px]">A UI/UX Designer blends creativity with functionality to craft seamless digital experiences. From branding and logo design to mockups and intuitive interfaces, they shape visually appealing and user-friendly designs that enhance engagement and brand identity.</p>
          <div className="flex gap-10 max-[960px]:gap-5 flex-wrap">
            <div className="border-l-[4px] border-[#F05734] rounded-[5px] pl-3">
              <h2
                data-target="2"
                className="text-[27px] max-[1060px]:text-[20px] font-[700] text-[#F05734]"
                ref={el => { if (el) countersRef.current.push(el); }}
              >
                0
              </h2>
              <p className="text-[#ffffff] text-[14px] max-[1060px]:text-[12px]">Project Completed</p>
            </div>
            <div className="border-l-[4px] border-[#F05734] rounded-[5px] pl-3">
              <h2
                data-target="2"
                className="text-[27px] max-[1060px]:text-[20px] font-[700] text-[#F05734]"
                ref={el => { if (el) countersRef.current.push(el); }}
              >
                0
              </h2>
              <p className="text-[#ffffff] text-[14px] max-[1060px]:text-[12px]">Year of Experiences</p>
            </div>
            <div className="border-l-[4px] border-[#F05734] rounded-[5px] pl-3">
              <h2
                data-target="100"
                className="text-[27px] max-[1060px]:text-[20px] font-[700] text-[#F05734]"
                ref={el => { if (el) countersRef.current.push(el); }}
              >
                0
              </h2>
              <p className="text-[#ffffff] text-[14px] max-[1060px]:text-[12px]">Client Satisfaction</p>
            </div>
          </div>
          <Button
            title="Get Resume"
            className="bg-[#F05734] hover:bg-transparent text-white hover:text-[#f05734] w-max"
            image={
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="20" className="group-hover:fill-[#f05734] duration-700 max-[500px]:h-[16px] max-[500px]:w-[20px]" viewBox="0 0 1024 1024">
                <path d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z" />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default About;