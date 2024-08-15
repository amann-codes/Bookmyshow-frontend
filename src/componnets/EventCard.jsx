import { TitleCard } from "./TitleCard";
import { ImageCard } from "./ImageCard";
export function EventCard(prop){
    return <div className="rounded-md sm:max-w-[200px] max-w-auto w-auto sm:max-h-max max-h-auto sm:h-max cursor-pointer mb-8">
        <a>
            <div>
                <ImageCard src={prop.src} alt={prop.alt} height={prop.height}/>
                <TitleCard about1={prop.about1} about2={prop.about2} about3={prop.about3}/>
            </div>
        </a>
    </div>
}