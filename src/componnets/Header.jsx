import { Logo } from "./Logo";
import { SearchLink } from "./SearchLink";
import { NaviBar } from "./NaviBar";
export function Header(prop) {
  return (
    <header className="bg-white">
      <div className="h-16 max-w-[1240px] w-full mx-auto sm:px-0 px-3">
        <div className="flex justify-between items-center h-full w-full">
          <div className="flex justify-between items-center h-full w-full">
            <div className="flex justify-start items-center w-3/4">
              <Logo />
              <SearchLink
                placeholder={
                  "Search for Movies, Events, Plays, Sports and Activities"
                }
              />
            </div>
            <div className="flex justify-end items-center h-full">
              <div
                className="hidden sm:flex sm:justify-start items-center mr-8 cursor-pointer"
                onClick={prop.open}
              >
                <span className="text-base font-medium pr-3.5 text-red-400">
                  {prop.loc}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div
                  onClick={prop.log}
                  className="bg-[#F84464] rounded text-center sm:text-sm text-xs pt-[2px] align-middle w-[52px] h-[30px] sm:h-[30px] sm:w-[70px] leading-6 text-white cursor-pointer"
                >
                  Sign up
                </div>
                <div
                  className="ml-2 sm:ml-6 cursor-pointer"
                  onClick={prop.openmenu}
                >
                  <svg
                    width="22px"
                    height="14px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Menu</title>
                    <g
                      fillRule="nonzero"
                      stroke="#3B4261"
                      strokwidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                    >
                      <path d="M1.611 1h20.614M1.611 7h20.614M1.611 13h20.614"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NaviBar />
    </header>
  );
}
