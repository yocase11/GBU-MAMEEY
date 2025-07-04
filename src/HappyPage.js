// src/HappyPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const happyHobbies = [
  { option: "🌞 Go for a walk in the sun" },
  { option: "🎧 Listen to your favorite music", external: "https://open.spotify.com" },
  { option: "🎨 Do a fun painting", external: "https://sketch.io/sketchpad/" },
  { option: "🍦 Treat yourself to ice cream", external: "https://www.zomato.com/chennai/vepery-restaurants?dishv2_id=58693&category=1" },
  { option: "🎮 Play a feel-good game", link: "/minigames" }, // 👈 Add this line
  { option: "📸 Take fun selfies", link: "/camera" },
];

function HappyPage() {
  const navigate = useNavigate();

  return (
    <div className="star-wars-bg w-screen h-screen flex items-center justify-center font-sans animate-fade-in">
      <div className="glass-box animate-scale-in">
        <h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg" style={{ fontFamily: "'Pacifico', cursive" }}>
          😊 You're Feeling Happy!
        </h1>

        <p className="text-white text-lg mb-6 max-w-md font-semibold">
          Here's a feel-good hobby to match your vibe:
        </p>

        <ul className="happy-list mb-8">
          {happyHobbies.map((item, idx) => (
            <li key={idx} className="happy-item animate-fade-up">
              {item.link ? (
                <button
                  onClick={() => navigate(item.link)}
                  className="funky-btn hover:animate-pulse"
                >
                  {item.option}
                </button>
              ) : item.external ? (
                <a
                  href={item.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="funky-btn hover:animate-pulse"
                >
                  {item.option}
                </a>
              ) : (
                <span className="text-white">{item.option}</span>
              )}
            </li>
          ))}
        </ul>

        <div className="wheel-buttons animate-fade-up">
          <button
            className="wheel-btn hover:animate-pulse"
            onClick={() => alert("🎉 Stay happy and spread the joy!")}
          >
            ✨ Get More Joy
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

export default HappyPage;
