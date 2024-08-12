import { Header } from "../componnets/Header";
import { CommonCard } from "../componnets/CommonCard";
import { Footer } from "../componnets/Footer";
import { useState } from "react";
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

import { Locationlist } from "../componnets/Locationlist";
import { Signup } from "../componnets/Signup";
import { SideMenuBar } from "../componnets/SideMenuBar";

export function Homepage() {
  const [locate, setlocate] = useState(false);
  const [log, setlog] = useState(false);
  const [menu, setMenu] = useState(false);
  return (
    <div className="bg-[#f5f5f5] scrollbar-hide overflow-auto">
      <Header
        loc={"Choose Location ⮟"}
        open={() => setlocate(true)}
        log={() => setlog(true)}
        openmenu={() => setMenu(true)}
      />
      <CommonCard cat={movies} title={"Recommended Movies"} />
      <CommonCard cat={music} title={"Your Music Studio"} />
      <CommonCard cat={fun} title={"Explore Fun Activities"} />
      <CommonCard cat={outdoor} title={"Outdoor Events"} />
      <CommonCard cat={laughter} title={"Laughter Therapy"} />
      <CommonCard cat={popular} title={"Popular Events"} />
      <CommonCard cat={latest} title={"Latest plays"} />
      <CommonCard cat={top} title={"Top Games & Sport Events"} />
      <Footer />
      {locate && <Locationlist close={() => setlocate(false)} />}
      {log && <Signup close={() => setlog(false)} />}
      {menu && (
        <SideMenuBar
          onClose={() => setMenu(false)}
          reg={() => {
            setlog(true);
            setMenu(false);
          }}
          setloc={() => {
            setlocate(true);
            setMenu(false);
          }}
        />
      )}
    </div>
  );
}
