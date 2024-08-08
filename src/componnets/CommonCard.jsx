import { Card } from "./Card";
import { useRef, useEffect, useState } from "react";

export function CommonCard(props) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;

      let newScrollLeft =
        direction === "left"
          ? Math.max(scrollLeft - clientWidth, 0)
          : Math.min(scrollLeft + clientWidth, maxScrollLeft);

      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  };

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScroll);
    }
    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

  return (
    <div className="flex flex-col sm:m-auto m-auto sm:max-w-[1240px] max-w-full sm:w-11/12 w-11/12 sm:h-full h-full sm:py-8 py-4 sm:mb-8 mb-1 mt-4 ">
      <div className="flex justify-between items-center mb-2">
        <div className="text-[#333333] sm:text-2xl text-xl sm:font-bold font-semibold">{props.title}</div>
        <div className="text-sm text-red-400 font-medium cursor-pointer">
          See All ›
        </div>
      </div>
      <div className="relative">
        {canScrollLeft && (
          <button
            className="absolute left-0 sm:top-[45%] top-1/4 transform -translate-y-1/2 bg-slate-400 rounded-full opacity-100 text-white p-2 z-5"
            onClick={() => scroll("left")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        )}
        <div
          className="grid sm:grid-cols grid-cols sm:grid-rows-1 grid-rows-1 sm:grid-flow-col grid-flow-col sm:gap-x-8 gap-x-4 gap-y-0 sm:gap-y-0 overflow-x-scroll overflow-y-hidden scroll-smooth scrollbar-hide"
          ref={scrollRef}
        >
          {
            props.cat.map((items, index) => {
              return (
                <Card
                  key={index}
                  src={items.src}
                  alt={items.about1}
                  about1={items.about1}
                  about2={items.about2}
                  about3={items.about3}
                />
              );
            })
          }
        </div>
        {canScrollRight && (
          <button
            className="absolute right-0 sm:top-[45%] top-1/4 transform -translate-y-1/2 bg-slate-400 rounded-full opacity-100 text-white p-2 z-5"
            onClick={() => scroll("right")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
