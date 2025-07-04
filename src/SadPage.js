// src/SadPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const sadHobbies = [
  { option: "📝 Write in a journal", link: "/journal" },
  { option: "📖 Read a comforting book", external: "https://www.wattpad.com/stories/comforting" },
  { option: "☕ Sip a warm drink and relax" },
  { option: "🎧 Listen to calming music", external: "https://open.spotify.com/playlist/37i9dQZF1DWVV27DiNWxkR" },
  { option: "💤 Take a short nap" },
  { option: "🌳 Sit quietly in nature" },
];

function SadPage() {
  const navigate = useNavigate();

  const handleClick = (item) => {
    if (item.link) {
      navigate(item.link); // internal routing
    } else if (item.external) {
      window.open(item.external, "_blank"); // open external site
    }
  };

  return (
    <div className="star-wars-bg w-screen h-screen flex items-center justify-center font-sans animate-fade-in">
      <div className="glass-box animate-scale-in">
        <h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg" style={{ fontFamily: "'Pacifico', cursive" }}>
          😢 Feeling Sad?
        </h1>

        <p className="text-white text-lg mb-6 max-w-md font-semibold">
          Here are some comforting activities:
        </p>

        <ul className="happy-list mb-8">
          {sadHobbies.map((item, idx) => (
            <li key={idx} className="happy-item animate-fade-up">
              {(item.link || item.external) ? (
                <button onClick={() => handleClick(item)} className="funky-btn hover:animate-pulse">
                  {item.option}
                </button>
              ) : (
                <span className="text-white">{item.option}</span>
              )}
            </li>
          ))}
        </ul>

        <div className="wheel-buttons animate-fade-up">
          <button
            className="wheel-btn hover:animate-pulse"
            onClick={() => alert("💖 Sending you virtual hugs!")}
          >
            🕊️ More Comfort
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

export default SadPage;
