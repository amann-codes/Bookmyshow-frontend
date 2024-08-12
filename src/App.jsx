import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { MoviesPAGE } from "./pages/MoviesPAGE";
import { EventPAGE } from "./pages/EventPAGE";
import { PlaysPAGE } from "./pages/PlaysPAGE";
import { ActivitiesPAGE } from "./pages/ActivitiesPAGE";
import { SportPAGE } from "./pages/SportPAGE";
export default function App() {
  return (
    <div className="scrollbar-hide overflow-auto h-screen">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/homepage"} element={<Homepage />} />
          <Route path={"/movies"} element={<MoviesPAGE />} />
          <Route path={"/events"} element={<EventPAGE />} />
          <Route path={"/plays"} element={<PlaysPAGE />} />
          <Route path={"/activities"} element={<ActivitiesPAGE />} />
          <Route path={"/sports"} element={<SportPAGE />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
