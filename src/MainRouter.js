// src/MainRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import SpinWheel from './SpinWheel';
import HappyPage from './HappyPage';
import CameraPage from './CameraPage';
import SadPage from './SadPage';
import AnxiousPage from './AnxiousPage';
import ExcitedPage from './ExcitedPage';
import MiniGamesPage from './MiniGamesPage';
import JournalPage from './JournalPage';
import Notepad from './Notepad';
import SecretPage from './SecretPage'; 
import StarWarsScene from './components/StarWarsScene';
import MoodAIPage from './MoodAIPage';
import StarWarsEasterEgg from './components/StarWarsEasterEgg';
import Transition3D from './components/Transition3D';
import NewEasterEgg from './components/NewEasterEgg';


// Create this component

// Inside <Routes>



function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/spin" element={<SpinWheel />} />
        <Route path="/happy" element={<HappyPage />} />
        <Route path="/camera" element={<CameraPage />} />
        <Route path="/sad" element={<SadPage />} />
        <Route path="/anxious" element={<AnxiousPage />} />
        <Route path="/excited" element={<ExcitedPage />} />
        <Route path="/minigames" element={<MiniGamesPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/notepad" element={<Notepad />} />
        <Route path="/secret" element={<SecretPage />} />
        <Route path="/secret" element={<StarWarsEasterEgg />} />
        <Route path="/ai" element={<MoodAIPage />} />
        <Route path="/" element={<App />} />
        <Route path="/transition" element={<Transition3D />} />
        <Route path="/secret" element={<NewEasterEgg />} />
        <Route path="/secret" element={<StarWarsScene />} />
        <Route path="/secret" element={<StarWarsScene />} />
        <Route path="/secret" element={<StarWarsScene />} />
        <Route path="/secret" element={<StarWarsEasterEgg />} />

      </Routes>
    </Router>
  );
}

export default MainRouter;
