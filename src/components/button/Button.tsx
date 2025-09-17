import React from "react";

type props = {
  title?: string;
  className?: string;
  onClick?: () => void;
  image?: React.ReactNode;
}

const Button = ({ title, className, onClick, image }: props) => {

  return (
    <div onClick={onClick} className={`${className} px-4 max-[500px]:px-3 py-2 max-[500px]:py-[8px] border border-[#f05734] rounded-full group flex justify-center items-center gap-1 cursor-pointer transation-all duration-700`}>
      <button className="relative z-10 font-[500] text-[15px] max-[1150px]:text-[13px] max-[500px]:text-[12px] duration-700">{title}</button>
      {image}
    </div>
  );
};

export default Button;