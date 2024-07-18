import { BrowserRouter as Router } from "react-router-dom";
import './App.css'
import Dashboard from './comps/dashboard'
import Navbar from './comps/Navbar/navbar'
import BottomPlayer from "./comps/Player/bottomPlayer";
import { TrackProvider } from "./Utilities/TrackContext";
import React from "react";
import { VolumeProvider } from "./Utilities/VolumeContext";

const App: React.FC = () => {

return (
  <div className='h-full w-full flex flex-col select-none'>
    <TrackProvider>
      <Router>
        <Navbar />
        <Dashboard />
        <VolumeProvider>
          <BottomPlayer />
        </VolumeProvider>
      </Router>
    </TrackProvider>
  </div>
)
}

export default App
