import { useState } from "react";
import { Header } from "../componnets/Header";
import { Locationlist } from "../componnets/Locationlist";
import { Signup } from "../componnets/Signup";
import { SideMenuBar } from "../componnets/SideMenuBar";
import { ListYoShowComp } from "../componnets/ListYoShowComp";
export function ListYourShow() {
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
      <ListYoShowComp />
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
