import { FilterBox } from "./FilterBox";
import { dates, format, genre, lang } from "./list";
export function FilterCard(){
    return <div className="flex flex-col">
        <FilterBox filter={lang} title={'Languages'}/>
        <FilterBox filter={genre} title={'Genre'}/>
        <FilterBox filter={format} title={'Format'}/>
        <FilterBox filter={dates} title={'Dates'}/>
    </div>
}