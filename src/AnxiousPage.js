import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const anxiousHobbies = [
  { option: "🧘 Practice deep breathing" },
  { option: "🎵 Listen to relaxing sounds", external: "https://www.noisli.com/" },
  { option: "📓 Journal your thoughts and feelings", link: "/notepad" },
  { option: "🌿 Meditate in silence" },
  { option: "📷 Look at happy memories" },
];

function AnxiousPage() {
  const navigate = useNavigate();

  return (
    <div className="star-wars-bg w-screen h-screen flex items-center justify-center font-sans animate-fade-in">
      <div className="glass-box animate-scale-in">
        <h1
          className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          😟 Feeling Anxious?
        </h1>

        <p className="text-white text-lg mb-6 max-w-md font-semibold">
          Try one of these calming activities:
        </p>

        <ul className="happy-list mb-8">
          {anxiousHobbies.map((item, idx) => (
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
            onClick={() => alert("🌈 You're stronger than you think!")}
          >
            🧠 Calm Me More
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

export default AnxiousPage;
