import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { MoviesPAGE } from "./pages/MoviesPAGE";
import { EventPAGE } from "./pages/EvevntPAGE";
import { PlaysPAGE } from "./pages/PlaysPAGE";
import { SportsPAGE } from "./pages/SportsPage";
import { ActivitiesPAGE } from './pages/ActivitiesPAGE'
export default function App(){
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Homepage/>}/>
        <Route path={'/homepage'} element={<Homepage/>}/>
        <Route path={'/movies'} element={<MoviesPAGE/>}/>
        <Route path={'/events'} element={<EventPAGE/>}/>
        <Route path={'/plays'} element={<PlaysPAGE/>}/>
        <Route path={'/sports'} element={<SportsPAGE/>}/>
        <Route path={'/activities'} element={<ActivitiesPAGE/>}/>
      </Routes>
    </BrowserRouter>
  </div>
}