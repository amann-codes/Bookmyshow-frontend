import React, { useState } from "react";
import { ShowBox } from "./ShowBox";
import { ShowList1, ShowList2 } from "../componnets/list";
import { Showpop } from "./Showpop";
import { Showpop2 } from "./Showpop2";

export function ListYoShowComp() {
  const [selItem, setSelItem] = useState(null);
  const [selItem1, setSelItem1] = useState(null);
  return (
    <div className="max-w-[920px] h-max my-20 mx-auto">
      <div className="flex flex-col items-center w-11/12 mx-auto mb-10">
        <div className="mb-4">
          <div className="text-5xl font-bold text-[#1F253A]">
            What Can You Host?
          </div>
        </div>
        <div>
          <div className="text-lg font-normal text-ellipsis text-wrap text-center text-[#1F253A]">
            As the purveyor of entertainment, BookMyShow enables your event with
            end to end solutions from the time you register to the completion of
            the event. Let’s look at what you can host.
          </div>
        </div>
        <div>
          <div className="flex flex-wrap justify-center mt-10">
            {ShowList1.map((items) => {
              return (
                <ShowBox
                  click={() => setSelItem(items)}
                  key={items.id}
                  bg={"#ecf5ff"}
                  src={items.dat[0].src1}
                  head={items.dat[1].head}
                />
              );
            })}
          </div>
        </div>
        <div className="flex justify-center w-[270px] h-[50px] bg-red-500 rounded-md my-20 mx-auto">
          <button className="text-white text-center w-full">
            List Your Show
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center w-11/12 mx-auto">
        <div className="mb-4">
          <div className="text-5xl font-bold text-[#1F253A]">
            What are the services we offer?
          </div>
        </div>
        <div>
          <div className="text-lg font-normal text-ellipsis text-wrap text-center text-[#1F253A]">
            After successful collaborations with the best event organisers over
            the past decade and a half, we’re well equipped to bring your vision
            to life.
          </div>
        </div>
        <div>
          <div className="flex flex-wrap justify-center mt-10">
            {ShowList2.map((items) => {
              return (
                <ShowBox
                  click={() => setSelItem1(items)}
                  bg={"#fcf1f1"}
                  key={items.id}
                  src={items.dat[0].src1}
                  head={items.dat[1].head}
                />
              );
            })}
          </div>
        </div>
        <div>
          <div className="text-lg font-normal text-ellipsis text-wrap text-center text-[#1F253A]">
            Apart form these must haves for any event, we also support a host of
            other services like SEO for your event, custom pricing for your
            tickets and this and also this.
          </div>
        </div>
        <div className="flex justify-center w-[270px] h-[50px] bg-red-500 rounded-md my-20 mx-auto">
          <button className="text-white text-center w-full">
            List Your Show
          </button>
        </div>
      </div>
      <div className="max-w-full h-auto mx-auto">
        <div className=" flex flex-col items-center">
          <div className="w-11/12 mt-5">
            <div className="text-6xl text-[#1F253A] font-bold text-ellipsis text-wrap text-center">
              Sit back and watch your event come to life
            </div>
          </div>
          <div className="w-11/12 mt-6">
            <div className="text-2xl text-[#1F253A] font-bold text-ellipsis text-wrap text-center">
              Events maybe all fun and games, but we take it seriously. We
              ensure our customer’s security so that you don’t have to.
            </div>
          </div>
        </div>
      </div>
      {selItem && <Showpop item={selItem} close={() => setSelItem(null)} />}
      {selItem1 && <Showpop2 item={selItem1} featlist={ShowList2[0]} close={() => setSelItem1(null)} />}
    </div>
  );
}
