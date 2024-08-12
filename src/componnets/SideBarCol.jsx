import React from "react";

export function SidebarCol(prop) {
  return (
    <div className="flex justify-between w-full sm:h-[60px] h-max items-center px-2 py-3 border-b-[0.5px] bg-white">
      <div className="flex justify-start items-center">
        <div className="flex justify-start">
          <img src={prop.src} className="w-[20px] h-[20px] mx-2"></img>
        </div>
        <div className="flex flex-col ml-2">
          <div className="text-base text-black font-medium">{prop.about1}</div>
          <div className="text-xs text-black font-normal">{prop.about2}</div>
        </div>
      </div>
      <div className="mr-3">
        <svg width="6" height="11" xmlns="http://www.w3.org/2000/svg">
          <title>Right Arrow</title>
          <path
            d="M.627.958a.572.572 0 0 1 0-.747.447.447 0 0 1 .679 0l4.04 4.469a.569.569 0 0 1 0 .75L1.307 9.9a.447.447 0 0 1-.68 0 .572.572 0 0 1 0-.747l3.706-4.097L.627.958z"
            fill="#2B3148"
          ></path>
        </svg>
      </div>
    </div>
  );
}
