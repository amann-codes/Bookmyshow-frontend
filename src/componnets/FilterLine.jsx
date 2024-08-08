export default function FilterLine(prop) {
  return (
    <div className="flex justify-start h-auto w-full border-t-[0.3px] border-gray-300">
      <div className="text-sm font-normal py-3 pl-2 text-[#666666] bg-white">
        {prop.filter}
      </div>
    </div>
  );
}
