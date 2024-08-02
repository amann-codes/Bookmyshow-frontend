import { FilterBox } from "./FilterBox";

export function FilterCard(){
    return <div className="flex flex-col">
        <FilterBox title={'Languages'}/>
        <FilterBox title={'Genre'}/>
        <FilterBox title={'Format'}/>
    </div>
}