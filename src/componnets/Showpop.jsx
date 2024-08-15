import React from "react";

export function Showpop(prop) {
  return (
    <div className="fixed flex-col inset-0 w-screen h-screen bg-transparent backdrop-blur-sm bg-opacity-30 flex justify-center items-center">
      <div onClick={prop.close} className="mb-4 mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="gray"
          className="size-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
      <div className="flex flex-wrap justify-center w-1/4 items-center bg-white p-6 rounded-md shadow-2xl">
        <div className="block mb-4 h-[70px] w-[70px]">
          <img
            className="w-full"
            src={prop.item.dat[0].src1}
            alt={prop.item.dat[1].head}
          />
        </div>
        <p className="block text-center w-full text-2xl font-bold text-[#1f253a] mb-6">
          {prop.item.dat[1].head}
        </p>
        <p className="block text-center w-full text-lg font-semibold text-[#1f253a]">
          {prop.item.dat[2].head2}
        </p>
        <p className="block text-center w-full text-xl font-bold text-[#1f253a] mt-10">
          Get listed among these
        </p>
        <div className="block w-full mt-4">
          <div className="flex justify-between">
            <img className="w-[100px] h-[140px]" src={prop.item.dat[4].src3}></img>
            <img className="w-[100px] h-[140px]" src={prop.item.dat[4].src3}></img>
            <img className="w-[100px] h-[140px]" src={prop.item.dat[4].src3}></img>
          </div>
        </div>
        <div className="block bg-red-500 rounded-md mx-auto mt-4 py-2 px-4">
          <button className="text-white text-center w-full">
            List Your Show
          </button>
        </div>
      </div>
    </div>
  );
}
