import React from "react";
import { useState } from "react";

export function Bookevent(prop) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoaded1, setIsLoaded1] = useState(false);
  return (
    <div>
      <div className="hidden w-screen sm:flex flex-col justify-start mx-auto overflow-y-auto absolute scrollbar-hide inset-0 backdrop-blur-sm cursor-auto">
        <div className="flex justify-center my-5 cursor-pointer">
          <svg
            onClick={prop.close}
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
        <div className="flex flex-col bg-gray-100 h-screen w-[95%] pt-14 mx-auto rounded-t-lg border-2 border-gray-200">
          <div className="flex flex-row justify-start w-full pb-5 rounded-md pt-5">
            <div className="ml-8">
              <img
                src={prop.src}
                className={`w-[261px] h-[392px] rounded-md ${
                  isLoaded ? "" : "hidden"
                }`}
              ></img>
              {!isLoaded && (
                <div className="animate-bounce">
                  <div className=" w-[110px] h-[100px] mx-[56px] my-[100px] animate-spin-slow rounded-full bg-gray-700"></div>
                </div>
              )}
            </div>
            <div className="flex flex-col justify-center space-y-5 ml-5 mr-[90px]">
              <div className="mb-3">
                <p className="text-3xl font-bold rounded-md">{prop.about1}</p>
              </div>
              <div className="flex justify-start space-x-2">
                {prop.screeningTypes.map((items, index) => {
                  return (
                    <div
                      className="px-1 bg-white border-[0.5px] border-gray-300 rounded-md cursor-pointer"
                      key={index}
                    >
                      <p className="text-black text-sm font-normal py-[2px] px-1">
                        {items}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-start space-x-2">
                {prop.lang.map((items, index) => {
                  return (
                    <div
                      className="px-1 bg-white border-[0.5px] border-gray-300 rounded-md cursor-pointer"
                      key={index}
                    >
                      <p className="text-black text-base font-normal py-[2px] px-1">
                        {items}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-start w-max space-x-3">
                <div>
                  <p className="text-base text-black font-normal cursor-pointer hover:underline">
                    {prop.about2}
                  </p>
                </div>
                <p>•</p>
                <div>
                  <p className="text-base text-black font-normal">
                    {prop.duration}
                  </p>
                </div>
                <p>•</p>
                <div>
                  <p className="text-base text-black font-normal">
                    {prop.certification}
                  </p>
                </div>
                <p>•</p>
                <div>
                  <p className="text-base text-black font-normal">
                    {prop.releaseDate}
                  </p>
                </div>
              </div>
              <div className="flex justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <p className="text-base text-black font-normal">
                  {prop.location}
                </p>
              </div>
              <div className="w-max h-max px-20 py-3 bg-red-400 border-[0.8px] border-transparent rounded-md">
                <button className="text-white text-lg font-bold">
                  Get Tix
                </button>
              </div>
            </div>
            <div className="h-max w-5/12 mr-8">
              <p className="font-bold text-xl pl-2 mb-3">About the show</p>
              <div className="bg-gray-200 rounded-md p-3">
                <p className="text-wrap text-ellipsis text-base font-normal">
                  {prop.about}
                </p>
              </div>
              <div className="mt-2 font-bold text-lg pl-2 mb-3 border-b-[1px] border-gray-300">
                Artists
              </div>
              <div className="flex justify-around flex-wrap">
                {prop.cast.map((items, index) => {
                  return (
                    <div key={index}>
                      <img
                        className={`w-25 h-25 rounded-full ${
                          isLoaded1 ? " " : "hidden"
                        }`}
                        src={items}
                        onLoad={() => setIsLoaded1(true)}
                        onError={() => setIsLoaded1(false)}
                      ></img>
                      <div className="mt-6">
                        {!isLoaded1 && (
                          <div className="animate-bounce">
                            <div className=" w-[110px] h-[100px] animate-spin rounded-full bg-gray-700"></div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden fixed inset-0 flex flex-col h-screen w-screen overflow-y-auto scrollbar-hide bg-gray-100 z-10">
        <div className="bg-gray-100 w-full h-max flex flex-col justify-start p-3 border-b-[0.8px] border-gray-300 drop-shadow-md">
          <div className="flex justify-start items-center drop-shadow-md h-max">
            <div
              className="flex justify-center items-center"
              onClick={prop.close}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-xl font-bold">{prop.about1}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start bg-gray-300">
          <div className="m-3">
            <img
              className={`max-w-[170px] rounded-md ${isLoaded ? "" : "hidden"}`}
              onLoad={() => setIsLoaded(true)}
              onError={() => setIsLoaded(false)}
              src={prop.src}
            ></img>
            {!isLoaded && (
              <div className="animate-bounce">
                <div className="h-[80px] w-[70px] mt-[80px] mx-5 animate-spin rounded-full bg-gray-700"></div>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col rounded-md justify-start space-y-3">
              <div className="mt-4 px-1">
                <p className="text-sm font-medium flex w-full overflow-hidden text-ellipsis whitespace-normal">{prop.about2}</p>
              </div>
              <div className="flex flex-row flex-wrap justify-start">
                {prop.screeningTypes.map((items, index) => {
                  return (
                    <div
                      className="px-1 bg-white mt-1 mr-1 border-[0.5px] border-gray-300 rounded-md cursor-pointer"
                      key={index}
                    >
                      <p className="text-black text-sm font-normal py-[2px] px-[3px]">
                        {items}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-row flex-wrap justify-start">
                {prop.lang.map((items, index) => {
                  return (
                    <div
                      className="px-1 bg-white mt-1 mr-1 border-[0.5px] border-gray-300 rounded-md cursor-pointer"
                      key={index}
                    >
                      <p className="text-black text-sm font-normal py-[2px] px-[3px]">
                        {items}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-row justify-start space-x-1 py-1">
                <div>
                  <p className="text-sm text-black font-normal">
                    {prop.duration}
                  </p>
                </div>
                <p>•</p>
                <div>
                  <p className="text-sm text-black font-normal">
                    {prop.certification}
                  </p>
                </div>
                <p>•</p>
                <div>
                  <p className="text-sm text-black font-normal">
                    {prop.releaseDate}
                  </p>
                </div>
              </div>
              <div className="flex justify-start  py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-7 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <p className="text-sm text-black font-normal flex w-full overflow-hidden text-ellipsis whitespace-normal">
                  {prop.location}
                </p>
              </div>
            </div>
            <div className="w-max h-max py-2 px-20 bg-red-400 rounded-md mb-[13px] mt-2">
              <button className="text-white font-medium text-base ">
                Get Tix
              </button>
            </div>
          </div>
        </div>
        <div>
          <p className="font-bold text-xl pl-2 mt-3 mb-1">About the show</p>
          <div className="bg-gray-200 rounded-md p-3">
            <p className="text-wrap text-ellipsis text-sm font-normal">
              {prop.about}
            </p>
          </div>
        </div>
        <div className="font-bold text-lg pl-2 mt-3 mb-3 border-b-[1px] border-gray-300">
          Artists
        </div>
        <div className="flex justify-around flex-wrap">
          {prop.cast.map((items, index) => {
            return (
              <div key={index}>
                <img
                  className={`w-[90px] h-[90px] rounded-full ${
                    isLoaded1 ? " " : "hidden"
                  }`}
                  src={items}
                  onLoad={() => setIsLoaded1(true)}
                  onError={() => setIsLoaded1(false)}
                ></img>
                <div className="mt-6">
                  {!isLoaded1 && (
                    <div className="animate-bounce">
                      <div className=" w-[55px] h-[50px] animate-spin-slow rounded-full bg-gray-700"></div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
