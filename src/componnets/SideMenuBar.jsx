import React, { useRef } from "react";
import { SidebarCol } from "./SideBarCol";
import { Sidebarel } from "../componnets/list";

export function SideMenuBar(prop) {
  const menuref = useRef();

  const closeMenu = (e) => {
    if (menuref.current === e.target) {
      prop.onClose();
    }
  };

  return (
    <div
      ref={menuref}
      onClick={closeMenu}
      className="fixed flex justify-end inset-0 h-screen w-screen drop-shadow-2xl bg-black bg-opacity-20"
    >
      <div className="sm:w-1/4 w-2/3 sm:h-full bg-white">
        <div className="drop-shadow-md">
          <div className="flex justify-start items-center pl-3 w-full bg-white h-[70px] border-b-2">
            <div className="text-2xl font-bold">Hey!!!</div>
          </div>
          <div className="flex sm:justify-between justify-end py-3 px-2 w-full bg-white items-center">
            <div className="flex justify-start items-center">
              <img
                className="w-[35px] h-[35px] rounded-full border-transparent"
                src="https://in.bmscdn.com/webin/movies/superstar/rewards_login.png"
              ></img>
              <div className="ml-2 text-ellipsis text-sm text-wrap text-[#747eaa]">
                Unlock special offers & great benefits...
              </div>
            </div>
            <div className="border-red-500 border-[0.4px] rounded-md sm:mx-0 mx-2 mt-2 sm:mt-0 w-auto sm:w-[150px] text-center">
              <button
                onClick={prop.reg}
                className=" text-red-500 text-xs font-medium p-2 focus:outline-none"
              >
                Login / Register
              </button>
            </div>
          </div>
        </div>
        <div className="sm:hidden">
          <div className="flex justify-center border-[0.8px] mb-2 mt-3 mx-6 rounded-md bg-white">
            <button onClick={prop.setloc} className="text-sm font-semibold text-red-400 p-2">Set your location</button>
          </div>
        </div>
        <div>
          {Sidebarel.map((items, index) => {
            return (
              <SidebarCol
                key={index}
                src={items.src}
                about1={items.about1}
                about2={items.about2}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
