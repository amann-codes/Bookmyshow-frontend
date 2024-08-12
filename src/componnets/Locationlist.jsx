import { Locations } from "../componnets/list";
import { SearchLink } from "./SearchLink";
import { useRef, useState } from "react";
function LocationBlock(prop) {
  const [sel, setSel] = useState(false);
  return (
    <a
      className="flex flex-col mt-4 mr-4 border rounded-md border-gray-200 cursor-pointer sm:p-2"
      onClick={prop.close}
    >
      <div className="pb-1 px-2 mx-1" onClick={() => setSel(true)}>
        {sel == true ? (
          <img className="sm:h-[65px] sm:w-[65px] h-[80px] w-[80px]" src={prop.selsrc}></img>
        ) : (
          <img className="sm:h-[65px] sm:w-[65px] h-[80px] w-[80px]" src={prop.src}></img>
        )}
      </div>
      <div className="text-base sm:font-semibold font-medium text-center px-2">{prop.loc}</div>
    </a>
  );
}

export function Locationlist(prop) {
  return (
    <div className="fixed inset-0 flex flex-col justify-start sm:pt-[120px] w-screen sm:mx-auto h-screen items-center drop-shadow-lg sm:bg-transparent sm:backdrop-blur-sm backdrop-blur-sm">
      <div className="hidden sm:flex sm:mb-3" onClick={prop.close}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="gray"
          className="sm:size-12 size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
      <div className="flex flex-col w-full h-full sm:w-auto sm:h-auto bg-white rounded-md px-16 py-2 sm:pt-6 sm:pb-10">
        <div className="flex flex-row items-center mb-4 mt-2 sm:my-2">
          <div className="w-full">
            <SearchLink placeholder={"Search for your city"} />
          </div>
        </div>
        <div>
          <div className="flex mt-3 justify-center text-red-500">
            Popular Cities
          </div>
        </div>
        <div className="flex sm:justify-start justify-center flex-wrap border-transparent mx-auto">
          {Locations.map((items, index) => {
            return (
              <LocationBlock
                key={index}
                loc={items.loc}
                src={items.src}
                selsrc={items.srcSelected}
                close={prop.close}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
