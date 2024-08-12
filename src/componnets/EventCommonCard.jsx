import { EventCard } from "./EventCard";
import { FilterButton } from "./Filterbutton";
import { FilterCard } from "./FilterCard";
export function EventCommonCard(props) {
  return (
    <div className="max-w-[1240px] w-11/12 m-auto mt-[48px]">
      <div className="flex flex-row">
        <div className="hidden sm:flex sm:flex-col sm:mr-[30px]">
          <div className="text-xl font-bold mb-4">Filters</div>
          <div className="flex flex-col ">
            <FilterCard />
          </div>
        </div>
        
        <div className="flex flex-col sm:mb-8 mb-8">
          <div className="text-xl font-bold mb-4">{props.title1}</div>
          <div className="sm:grid sm:grid-cols-4 sm:gap-8 grid grid-cols-3 gap-4">
            {
              props.cat.map((items, index)=>{
                return <EventCard key={index} src={items.src} alt={items.about1} about1={items.about1} about2={items.about2} about3={items.about3}/>
              })
            }
          </div>
          <div className="fixed bottom-2 right-2 sm:hidden">
            <FilterButton/>
        </div>
        </div>
      </div>
    </div>
  );
}