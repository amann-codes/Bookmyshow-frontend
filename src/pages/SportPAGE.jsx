import { EventCommonCard } from "../componnets/EventCommonCard";
import { Header } from "../componnets/Header";
import { outdoor } from "../componnets/list";
export function SportPAGE() {
  return (
    <div>
      <Header/>
      <EventCommonCard cat={outdoor} title1={"Sport Events"} />
    </div>
  );
}
