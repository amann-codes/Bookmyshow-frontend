export function TitleCard(prop) {
  return (
    <div className="flex flex-col sm:w-[222px] sm:h-full w-[110px] h-max mt-1 pt-1">
      <div className="flex w-full">
        <div className="sm:text-lg text-base font-medium mb-1 overflow-hidden text-ellipsis whitespace-normal">
          {prop.about1}
        </div>
      </div>
      <div className="flex w-full">
        <div className="sm:text-base text-sm font-normal text-[#6f6f6f] overflow-hidden text-ellipsis whitespace-normal">
          {prop.about2}
        </div>
      </div>
      <div className="flex w-full">
        <div className="sm:text-base text-sm  font-normal text-[#6f6f6f] overflow-hidden text-ellipsis whitespace-normal">
          {prop.about3}
        </div>
      </div>
    </div>
  );
}
