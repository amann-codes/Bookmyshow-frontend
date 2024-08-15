export function Filter(prop) {
  return (
    <div className="flex flex-wrap h-8 mt-2 mr-2 items-center border-[0.8px] rounded-md hover:bg-red-400 ease-in-out duration-200 hover:text-white  border-gray-300 px-2">
      <a className="text-red-400text-base cursor-pointer">{prop.filter}</a>
    </div>
  );
}
