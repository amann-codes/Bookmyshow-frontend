import { EventCommonCard } from "../componnets/EventCommonCard";
import { Header } from "../componnets/Header";
import { top } from "../componnets/list";
export function EventPAGE() {
  return (
    <div className="bg-[#f5f5f5]">
      <Header />
      <EventCommonCard cat={top} title1={"Events"} />
    </div>
  );
}
