import { TitleCard } from "./TitleCard";
import { ImageCard } from "./ImageCard";
export function Card(prop) {

  return (
    <div className="rounded-md w-[222px] max-h-[500px] cursor-pointer">
      <a>
        <div>
          <ImageCard src={prop.src} alt={prop.alt}/>
          <TitleCard about1={prop.about1} about2={prop.about2} about3={prop.about3}/>
        </div>
      </a>
    </div>
  );
}
