import { useState } from "react";
import { EventCommonCard } from "../componnets/EventCommonCard";
import { Header } from "../componnets/Header";
import { outdoor } from "../componnets/list";
import { Locationlist } from "../componnets/Locationlist";
import { Signup } from "../componnets/Signup";
import { SideMenuBar } from "../componnets/SideMenuBar";
export function ActivitiesPAGE() {
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
      <EventCommonCard cat={outdoor} title1={"Activities"} />
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
