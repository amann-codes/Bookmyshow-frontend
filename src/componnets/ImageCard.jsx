import { useState } from "react";

export function ImageCard(prop) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="rounded-md sm:w-auto sm:h-full w-[110px] h-[183px]">
      {!isLoaded && (
        <div className="mt-20 sm:mx-auto mx-6">
          <div className="animate-bounce">
            <div className="sm:w-[110px] sm:h-[100px] sm:mx-[56px] sm:my-[100px] w-[50px] h-[60px] animate-spin-slow rounded-full bg-slate-300"></div>
          </div>
        </div>
      )}

      <img
        className={`w-full h-full rounded-[inherit] ${
          isLoaded ? "" : "hidden"
        }`}
        src={prop.src}
        alt={prop.alt}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(false)}
      />
    </div>
  );
}
