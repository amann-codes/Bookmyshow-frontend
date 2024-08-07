import { Box } from "./Box";
import { Trendingbox } from "./list";
export function Trending(prop) {
  return (
    <div className="max-w-[1240px] w-11/12 sm:h-[600px] h-full mx-auto sm:my-16 my-10">
      <div className="text-2xl font-bold mb-4">{prop.title}</div>
      <div className="flex flex-wrap justify-start sm:m-2 m-2 mb-8">
        {Trendingbox.map((items, index) => {
          return (
            <Box key={index} about1={items.about1} about2={items.about2} />
          );
        })}
      </div>
    </div>
  );
}
