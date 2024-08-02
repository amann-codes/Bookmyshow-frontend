import { EventCommonCard } from "../componnets/EventCommonCard";
import { Header } from "../componnets/Header";
import { movies } from '../componnets/list' 
export function MoviesPAGE(){
    return <div className='bg-[#f5f5f5]'>
        <Header/>
        <EventCommonCard cat={movies} title1={'Movies'}/>
    </div>
}