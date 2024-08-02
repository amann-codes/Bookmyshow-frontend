import { EventCommonCard } from "../componnets/EventCommonCard";
import { Header } from "../componnets/Header";
import { fun } from '../componnets/list' 
export function PlaysPAGE(){
    return <div className='bg-[#f5f5f5]'>
        <Header/>
        <EventCommonCard cat={fun} title1={'Latest Plays'}/>
    </div>
}