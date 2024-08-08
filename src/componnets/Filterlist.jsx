import { MobileFilterlist } from "./MobileFilterList";
import { dates, format, genre, lang } from "./list";

export function Filterlist(prop) {
  return (
    <div className="fixed inset-0 bg-white overflow-y-scroll">
      <div>
        <div className="flex justify-between bg-white py-2 px-2 items-center align-middle">
          <div onClick={prop.onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>

          <div className="text-xl font-medium ">Filters</div>
          <div className="text-sm font-normal text-red-400">Clear All</div>
        </div>
        <div className="flex flex-col overflow-auto h-auto mb-[46px]">
          <MobileFilterlist filter={lang} title={"Languages"} />
          <MobileFilterlist filter={genre} title={"Genre"} />
          <MobileFilterlist filter={format} title={"Format"} />
          <MobileFilterlist filter={dates} title={"Dates"} />
        </div>
      </div>
      <div className="fixed bottom-0 flex justify-center align-middle w-full h-auto py-1 bg-white">
        <div onClick={prop.onApply} className="text-base bg-red-500 py-2 my-1 px-40 border border-transparent rounded-md text-white" >
          Apply Filters
        </div>
      </div>
    </div>
  );
}
