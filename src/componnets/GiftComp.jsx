import { GiftImglist } from "../componnets/list";
import { useState } from "react";
function Gift(prop) {
  const [hoverIndex, setHoverIndex] = useState(null);
  return (
    <div className="flex justify-center w-11/12 h-full flex-wrap border-transparent mx-auto mt-4">
      {GiftImglist.map((items, index) => {
        return (
          <div
            className="relative m-2"
            key={index}
            onMouseOver={() => setHoverIndex(index)}
            onMouseOut={() => setHoverIndex(null)}
          >
            <img src={items.src} className="rounded-md h-[184px] w-[286px]"></img>
            {hoverIndex == index && (
              <div>
                <Info
                  open={() => prop.open(items)}
                  combo={items.combo}
                  cprice={items.cprice}
                  card1={items.card1}
                  C1price={items.C1price}
                  card2={items.card2}
                  C2price={items.C2price}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function Giftpop(prop) {
  const [from, setFrom] = useState("Your Name");
  const [to, setTo] = useState("Recipient's Name");
  const [mes, setMes] = useState("Your Message");
  return (
    <div className="fixed flex flex-col inset-0 w-screen h-screen mx-auto my-auto backdrop-blur-sm bg-transparent rounded-md drop-shadow-2xl">
      <div className="w-auto h-auto m-auto ">
        <svg
          onClick={prop.close}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="gray"
          className="size-10 mx-auto mb-2 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <div className="flex flex-row h-full w-full justify-start bg-gray-100 border-gray-400 border-[0.5px] rounded-lg">
          <div className="flex flex-col h-full w-full rounded-l-lg bg-white p-5">
            <div className="flex justify-start mb-2">
              <div className="text-black font-medium text-lg">
                {prop.items.combo}
              </div>
            </div>
            <div className="flex justify-start flex-col mb-4">
              <p className="text-normal font-medium text-red-500">From</p>
              <input
                className="focus:outline-none border-[0.2px] border-gray-300 rounded-md py-1 pl-3"
                type="text"
                placeholder="Sender's Name"
                onChange={(e) => {
                  setFrom(e.target.value);
                }}
              ></input>
            </div>
            <div className="flex justify-start flex-col">
              <p className="text-normal font-medium text-red-500 mb-1">
                Recipient
              </p>
              <p className="text-normal font-medium text-red-500 mt-1">To</p>
              <input
                className="focus:outline-none border-[0.2px] border-gray-300 rounded-md py-1 pl-3 mb-3"
                type="text"
                placeholder="Sender's Name"
                onChange={(e) => {
                  setTo(e.target.value);
                }}
              ></input>
              <p className="text-normal font-medium text-red-500">Email</p>
              <input
                type="text"
                placeholder="Recipient's Email Id"
                className="focus:outline-none border-[0.2px] border-gray-300 rounded-md py-1 pl-3"
              ></input>
              <p className="text-xs font-medium text-gray-500 my-1">
                Your Gift Card will be emailed to the recipient's email address
                provided here.
              </p>
              <p className="text-base font-medium text-red-500 mt-3">
                Add your personal message...
              </p>
              <textarea
                className="focus:outline-none border-[0.2px] border-gray-300 rounded-md py-1 pl-3 mb-4 mt-1 h-[108px] resize-none overflow-hidden"
                maxLength={250}
                type="text"
                placeholder="Message"
                onChange={(e) => {
                  setMes(e.target.value);
                }}
              ></textarea>
              <p className="text-base font-medium text-red-500 mb-1">
                Combo Details
              </p>
              <div className="flex items-center space-x-5">
                <p className="text-base ml-1 font-medium text-black">
                  {prop.items.card1}
                </p>
                <p>{prop.items.C1price}</p>
              </div>
              <div className="flex items-center space-x-5">
                <p className="text-base ml-1 font-medium text-black">
                  {prop.items.card2}
                </p>
                <p>{prop.items.C2price}</p>
              </div>
            </div>
            <div className="flex justify-between mt-3 items-center">
              <p className="text-lg font-medium text-black">
                Amount Payable:{prop.items.cprice}
              </p>
              <button className="text-white bg-red-400 py-1 px-3 text-lg font-medium w-max h-max rounded-md">
                Make Payment
              </button>
            </div>
          </div>
          <div className="flex-col justify-start mx-11 bg-white rounded-lg mt-11 shadow-2xl">
            <div className="flex justify-center w-max h-max border-dashed border-b-[1px] border-gray-600">
              <img className=" rounded-t-lg h-[184px] w-[286px]" src={prop.items.src}></img>
            </div>
            <div className="flex flex-col justify-start">
              <p className="text-normal font-medium text-red-500 mt-5 ml-4">
                To
              </p>
              <p className="text-normal font-medium text-gray-700 ml-4">{to}</p>
            </div>
            <div>
              <p className="text-sm font-normal text-gray-500 ml-4 mt-4 h-[80px]">
                {mes}
              </p>
            </div>
            <div>
              <p className="flex justify-start text-sm font-normal ml-4">
                Best Wishes
              </p>
              <p className="text-red-400 text-3xl font-bold ml-4 ">{from}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Info(prop) {
  return (
    <div className="flex flex-wrap p-4 w-full h-full hover:bg-gray-600  ease-in-out duration-400 hover:bg-opacity-90 absolute top-0 left-0 items-center transition justify-start rounded-md py-1 px-4">
      <div className="flex flex-col justify-start w-full">
        <div className="flex flex-wrap justify-start w-full">
          <div className="flex justify-between w-full">
            <p className="text-xl text-white font-bold">{prop.combo}</p>
            <p className="text-xl text-white font-bold">{prop.cprice}</p>
          </div>
          <div className="flex justify-between mt-2 w-full">
            <p className="text-base text-white font-medium">{prop.card1}</p>
            <p className="text-base text-white font-medium">{prop.C1price}</p>
          </div>
          <div className="flex justify-between mt-2 w-full">
            <p className="text-base text-white font-medium">{prop.card2}</p>
            <p className="text-base text-white font-medium">{prop.C2price}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-red-500 rounded-md px-4 py-1 mx-auto">
        <button
          className="text-xl font-medium text-white text-center"
          onClick={prop.open}
        >
          Gift Now
        </button>
      </div>
    </div>
  );
}

export function GiftComp() {
  const [giftpop, setPop] = useState(false);
  const [selItem, setItem] = useState(null);
  return (
    <div className="flex flex-col items-center">
      <div className="w-3/4 h-max my-12 mx-auto">
        <p className="text-6xl text-[#1f253a] font-bold text-wrap text-ellipsis text-center">
          "Wanna gift some special gift cards to your loved ones?"
        </p>
      </div>
      <Gift
        open={(items) => {
          setItem(items);
          setPop(true);
        }}
      />
      {giftpop && <Giftpop items={selItem} close={() => setPop(false)} />}
    </div>
  );
}
