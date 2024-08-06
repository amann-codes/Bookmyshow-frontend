import { NavElement1 } from "./NavElements1";
import { NavElement2 } from "./NavElements2";

const navElements = [
    { to: '/movies', title: 'Movies' },
    { to: '/events', title: 'Events' },
    { to: '/plays', title: 'Plays' },
    { to: '/sports', title: 'Sports' },
    { to: '/activities', title: 'Activities' }
  ];

  const navElements2 = [
    { to: '/listyourshow', title: 'ListYourShow' },
    { to: '/corporates', title: 'Corporates' },
    { to: '/offers', title: 'Offers' },
    { to: '/giftcards', title: 'Gift Cards' }
  ];

export function NaviBar() {
  return (
    <div className="bg-slate-100">
      <div className="h-10 max-w-[1240px] w-11/12 m-auto">
        <div className="flex h-full justify-between items-center">
          <div className="flex justify-start h-full items-center">
            {navElements.map((item, index)=>{
                return <NavElement1 key={index} to={item.to} title={item.title}/> 
            })}
          </div>
          <div className="flex justify-end h-full items-center">
          {navElements2.map((item, index)=>{
                return <NavElement2 key={index} to={item.to} title={item.title}/> 
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
