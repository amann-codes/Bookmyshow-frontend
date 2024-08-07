export function Box(prop) {
  return (
    <div className="flex flex-col cursor-pointer sm:h-max sm:w-max sm:mt-4 sm:mr-4 h-max w-max mt-4 mr-4">
      <div className="flex flex-col sm:border-2 border border-slate-600 rounded-md bg-white sm:pb-3 py-2 pr-2 pl-2 sm:pr-[45px] sm:pt-[14px] sm:pl-4">
        <div>
          <div className="sm:text-base text-sm sm:font-semibold text-slate-600 sm:mb-[2px] overflow-hidden text-ellipsis">
            {prop.about1}
          </div>
        </div>
        <div>
          <div className="sm:text-sm text-xs sm:font-normal text-[#6f6f6f] sm:mb-[2px] overflow-hidden text-ellipsis">
            {prop.about2}
          </div>
        </div>
      </div>
    </div>
  );
}
