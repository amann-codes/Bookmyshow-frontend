import { Header } from "../componnets/Header";
import { Space } from "../componnets/Sidescrollspace";
import { CommonCard } from "../componnets/CommonCard";
import { Footer } from "../componnets/Footer";
import {
  laughter,
  movies,
  music,
  popular,
  top,
  outdoor,
  latest,
  fun,
} from "../componnets/list";
export function Homepage() {
  return (
    <div className="bg-[#f5f5f5]">
      <Header />
      {/* <Space /> */}
      <CommonCard cat={movies} title={"Recommended Movies"} />
      <CommonCard cat={music} title={"Your Music Studio"} />
      <CommonCard cat={fun} title={"Explore Fun Activities"} />
      <CommonCard cat={outdoor} title={"Outdoor Events"} />
      <CommonCard cat={laughter} title={"Laughter Therapy"} />
      <CommonCard cat={popular} title={"Popular Events"} />
      <CommonCard cat={latest} title={"Latest plays"} />
      <CommonCard cat={top} title={"Top Games & Sport Events"} />
      <Footer />    </div>
  );
}
