// src/MiniGamesPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function MiniGamesPage() {
  const navigate = useNavigate();

  return (
    <div className="star-wars-bg w-screen h-screen flex items-center justify-center">
      <div className="glass-box">
        <h1 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: "'Pacifico', cursive" }}>
          🎮 Mini Games to Boost Your Mood!
        </h1>

        <ul className="happy-list mb-8 text-white text-lg font-semibold">
          <li className="mb-4">
            <a href="https://quickdraw.withgoogle.com/" target="_blank" rel="noopener noreferrer" className="funky-btn">
              ✏️ Quick Draw
            </a>
          </li>
          <li className="mb-4">
            <a href="https://minesweeper.online/" target="_blank" rel="noopener noreferrer" className="funky-btn">
              💣 Minesweeper
            </a>
          </li>
          <li className="mb-4">
            <a href="https://www.google.com/fbx?fbx=snake_arcade" target="_blank" rel="noopener noreferrer" className="funky-btn">
              🐍 Google Snake Game
            </a>
          </li>
          <li className="mb-4">
            <a href="https://play2048.co/" target="_blank" rel="noopener noreferrer" className="funky-btn">
              🔢 2048 Puzzle
            </a>
          </li>
        </ul>

        <button className="back-btn" onClick={() => navigate('/')}>🔙 Back</button>
      </div>
    </div>
  );
}

export default MiniGamesPage;
