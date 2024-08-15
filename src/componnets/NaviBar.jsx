import { NavElement1 } from "./NavElements1";
import { NavElement2 } from "./NavElements2";
import { navElements, navElements2 } from "./list";


export function NaviBar() {
  return (
    <div className="bg-gray-200 border-b-[0.3px] border-gray-300 drop-shadow-lg">
      <div className="h-10 max-w-[1240px] w-11/12 m-auto">
        <div className="sm:flex h-full justify-between items-center">
          <div className='flex justify-between sm:flex sm:justify-start h-full items-center'>
            {navElements.map((item, index)=>{
                return <NavElement1 key={index} to={item.to} title={item.title}/> 
            })}
          </div>
          <div className="hidden sm:flex justify-end h-full items-center">
          {navElements2.map((item, index)=>{
                return <NavElement2 key={index} to={item.to} title={item.title}/> 
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
