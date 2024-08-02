import { EventCommonCard } from "../componnets/EventCommonCard";
import { Header } from "../componnets/Header";
import { music } from '../componnets/list' 
export function ActivitiesPAGE(){
    return <div className='bg-[#f5f5f5]'>
        <Header/>
        <EventCommonCard cat={music} title1={'Music'}/>
    </div>
}