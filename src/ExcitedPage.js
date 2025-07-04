// src/ExcitedPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const excitedHobbies = [
  { option: "🎤 Sing your heart out", external: "https://www.smule.com" },
  { option: "💃 Dance like nobody’s watching", external: "https://www.youtube.com/results?search_query=dance+workout" },
  { option: "📸 Create a photo collage", external: "https://www.canva.com/photo-collage/" },
  { option: "🎨 Design a funky art", external: "https://sketch.io/sketchpad/" },
  { option: "🕹️ Play an adrenaline game", external: "https://www.crazygames.com/t/adrenaline" },
];

function ExcitedPage() {
  const navigate = useNavigate();

  const handleClick = (item) => {
    if (item.link) {
      navigate(item.link);
    } else if (item.external) {
      window.open(item.external, "_blank");
    }
  };

  return (
    <div className="star-wars-bg w-screen h-screen flex items-center justify-center font-sans animate-fade-in">
      <div className="glass-box animate-scale-in">
        <h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg" style={{ fontFamily: "'Pacifico', cursive" }}>
          🤩 You're Feeling Excited!
        </h1>

        <p className="text-white text-lg mb-6 max-w-md font-semibold">
          Channel your excitement with one of these:
        </p>

        <ul className="happy-list mb-8">
          {excitedHobbies.map((item, idx) => (
            <li key={idx} className="happy-item animate-fade-up">
              <button
                onClick={() => handleClick(item)}
                className="funky-btn hover:animate-pulse"
              >
                {item.option}
              </button>
            </li>
          ))}
        </ul>

        <div className="wheel-buttons animate-fade-up">
          <button
            className="wheel-btn hover:animate-pulse"
            onClick={() => alert("💥 Keep the excitement alive!")}
          >
            🔥 I'm Hyped
          </button>

          <button
            className="back-btn hover:animate-pulse"
            onClick={() => navigate('/')}
          >
            🔙 Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExcitedPage;
