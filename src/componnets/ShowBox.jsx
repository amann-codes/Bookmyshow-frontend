export function ShowBox(prop) {
  return (
    <div
      onClick={prop.click}
      style={{ backgroundColor: prop.bg }}
      className="flex flex-wrap w-[calc(33.3333%-32px)] h-auto items-center justify-center rounded-sm cursor-pointer py-8 m-4 shadow-[0px_0px_2px_rgba(0,0,0,0.4)] ease-in-out duration-300 hover:shadow-[10px_10px_5px_-5px_rgba(0,0,0,0.41)] hover:translate-y-[-10px]"
    >
      <div className="block max-w-24 max-h-24 w-full">
        <img className="w-full" src={prop.src}></img>
      </div>
      <p className="text-xl font-bold text-center p-6 w-full">{prop.head}</p>
      <div className="block w-full max-w-6 max-h-6">
        <img
          src="https://assets-in.bmscdn.com/static/2021/06/info.png"
          alt="info"
        ></img>
      </div>
    </div>
  );
}