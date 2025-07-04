// src/SecretPage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import './styles.css';

function SecretPage() {
  const navigate = useNavigate();

  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="star-wars-bg w-screen h-screen flex items-center justify-center font-sans animate-fade-in">
      <div className="glass-box animate-scale-in text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg" style={{ fontFamily: "'Pacifico', cursive" }}>
          🎉 You Found the Secret!
        </h1>

        <p className="text-white text-lg mb-6 max-w-md font-semibold">
          This is a magical place just for curious minds like yours 🪄✨
        </p>

        <button
          className="wheel-btn hover:animate-pulse"
          onClick={() => navigate('/')}
        >
          🔙 Back Home
        </button>
      </div>
    </div>
  );
}

export default SecretPage;
