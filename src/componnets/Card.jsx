import { TitleCard } from "./TitleCard";
import { ImageCard } from "./ImageCard";
export function Card({ src, alt, about1, about2, about3 }) {

  return (
    <div className="rounded-md w-[222px] max-h-[500px] cursor-pointer">
      <a>
        <div>
          <ImageCard src={src} alt={alt}/>
          <TitleCard about1={about1} about2={about2} about3={about3}/>
        </div>
      </a>
    </div>
  );
}
