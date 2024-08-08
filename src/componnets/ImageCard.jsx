export function ImageCard(prop) {
  return (
    <div className="rounded-md sm:w-auto sm:h-full w-[110px] h-[183px] bg-slate-300">
      <img
        className="sm:w-full sm:h-full h-full w-full rounded-[inherit]"
        src={prop.src}
        alt={prop.alt}
      />
    </div>
  );
}
