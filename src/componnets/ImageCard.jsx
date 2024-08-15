import { useState } from "react";

export function ImageCard(prop) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="rounded-md sm:w-auto sm:h-full w-[110px] h-[183px]">
      {!isLoaded && (
        <div className="hidden sm:block rounded-full my-[100px] mx-auto sm:animate-spin sm:bg-slate-300 sm:w-[110px] sm:h-[120px]"></div>
      )}
      <img
        className={`sm:w-full sm:h-full h-full w-full rounded-[inherit] ${isLoaded ? '' : 'hidden'}`}
        src={prop.src}
        alt={prop.alt}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(false)}
      />
    </div>
  );
}
