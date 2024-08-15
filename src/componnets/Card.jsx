import { TitleCard } from "./TitleCard";
import { ImageCard } from "./ImageCard";
export function Card(prop) {
  return (
    <div className="rounded-md sm:max-w-[222px] sm:w-max sm:max-h-max sm:h-max w-max h-max cursor-pointer">
      <a>
        <div className="flex flex-col">
          <ImageCard src={prop.src} alt={prop.alt} height={prop.height}/>
          <TitleCard
            about1={prop.about1}
            about2={prop.about2}
            about3={prop.about3}
          />
        </div>
      </a>
    </div>
  );
}
