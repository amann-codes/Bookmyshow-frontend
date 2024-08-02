import { Filter } from "./Filter";

export function FilterBox(prop) {
  return (
    <div className="w-[268px] h-max bg-white mb-3 p-4">
      <div className="flex flex-col">
        <div className="flex justify-between items-center m-2">
          <div className="text-base text-slate-800">{prop.title}</div>
          <div className="text-xs">Clear</div>
        </div>
        <div className="flex flex-wrap justify-start">
        {
          prop.filter.map((items, index)=>{
            return <Filter filter={items} key={index}/>
          })
        }
        </div>
      </div>
    </div>
  );
}
