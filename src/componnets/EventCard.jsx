import { TitleCard } from "./TitleCard";
import { ImageCard } from "./ImageCard";
import { Bookevent } from "./Bookevent";
import { useState } from "react";
export function EventCard(prop) {
  const [book, setbook] = useState(false);
  return (
    <div className="rounded-md sm:max-w-[200px] max-w-auto w-auto sm:max-h-max max-h-auto sm:h-max cursor-pointer mb-8">
      <a
        onClick={() => {
          setbook(true);
        }}
      >
        <div>
          <ImageCard src={prop.src} alt={prop.alt} height={prop.height} />
          <TitleCard
            about1={prop.about1}
            about2={prop.about2}
            about3={prop.about3}
          />
        </div>
      </a>
      {book && (
        <Bookevent
          close={() => setbook(false)}
          src={prop.src}
          about1={prop.about1}
          about2={prop.about2}
          about3={prop.about3}
          about={prop.about}
          duration={prop.duration}
          location={prop.location}
          dateRange={prop.dateRange}
          genre={prop.genre}
          lang={prop.lang}
          screeningTypes={prop.screeningTypes}
          releaseDate={prop.releaseDate}
          certification={prop.certification}
          cast={prop.cast}
        />
      )}
    </div>
  );
}
