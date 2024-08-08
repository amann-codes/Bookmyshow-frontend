import FilterLine from "./FilterLine";

export function MobileFilterlist(prop) {
  return (
    <div>
      <div className="flex justify-start h-auto w-full bg-[#e5e5e5]">
        <div className="text-base font-medium py-3 pl-2 text-black">
          {prop.title}
        </div>
      </div>
      <div>
        {prop.filter.map((items, index) => (
          <FilterLine key={index} filter={items} />
        ))}
      </div>
    </div>
  );
}
