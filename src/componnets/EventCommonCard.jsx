import { EventCard } from "./EventCard";
import { FilterCard } from "./FilterCard";
import { movies } from './list'
export function EventCommonCard(props) {
  return (
    <div className="max-w-[1240px] w-11/12 m-auto mt-[48px]">
      <div className="flex flex-row">
        <div className="flex flex-col mr-[30px]">
          <div className="text-xl font-bold mb-4">Filters</div>
          <div className="flex flex-col ">
            <FilterCard />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-xl font-bold mb-4">{props.title1}</div>
          <div className="flex flex-wrap gap-x-8">
            { 
              props.cat.map((items, index)=>{
                return <EventCard key={index} src={items.src} alt={items.about1} about1={items.about1} about2={items.about2} about3={items.about3}/>
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
