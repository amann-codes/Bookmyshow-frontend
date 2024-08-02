export function Box({ about1, about2 }) {
  return (
    <div className="flex flex-col cursor-pointer h-[78px] w-max mt-4 mr-4">
      <div className="flex flex-col border-2 border-slate-600 rounded-md bg-white pb-3 pr-[45px] pt-[14px] pl-4">
        <div>
          <div className="text-base font-medium text-slate-600 mb-[2px] overflow-hidden text-ellipsis">
            {about1}
          </div>
        </div>
        <div>
          <div className="text-sm font-normal text-[#6f6f6f] mb-[2px] overflow-hidden text-ellipsis">
            {about2}
          </div>
        </div>
      </div>
    </div>
  );
}
