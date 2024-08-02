import { TitleCard } from "./TitleCard";
import { ImageCard } from "./ImageCard";
export function EventCard({ src, alt, about1, about2, about3 }){
    return <div className="rounded-md w-[200px] max-h-[500px] cursor-pointer mb-8">
        <a>
            <div>
                <ImageCard src={src} alt={alt}/>
                <TitleCard about1={about1} about2={about2} about3={about3}/>
            </div>
        </a>
    </div>
}