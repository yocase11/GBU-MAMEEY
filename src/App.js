import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function App() {
  const navigate = useNavigate();
  const [showWand, setShowWand] = useState(true);

  const handleMoodClick = (mood) => {
    switch (mood) {
      case 'Bored':
        navigate('/spin');
        break;
      case 'Happy':
        navigate('/happy');
        break;
      case 'Sad':
        navigate('/sad');
        break;
      case 'Anxious':
        navigate('/anxious');
        break;
      case 'Excited':
        navigate('/excited');
        break;
      default:
        alert(`You selected "${mood}" mood. Feature coming soon!`);
    }
  };

  const moods = ['Happy', 'Sad', 'Anxious', 'Excited', 'Bored'];

  return (
    <div className="app-background">
      <div className="card-box">
        <h1 className="welcome-text">Welcome! 👋</h1>
        <h2 className="sub-text">How are you feeling today?</h2>
        <div className="mood-buttons">
          {moods.map((mood) => (
            <button
              key={mood}
              onClick={() => handleMoodClick(mood)}
              className="mood-btn"
            >
              {mood}
            </button>
          ))}
          <button onClick={() => navigate('/ai')} className="mood-btn">
            🧠 Let AI Detect My Mood
          </button>
        </div>
        <button
          onClick={() => navigate('/secret')}
          className="wheel-btn"
          style={{ marginTop: '30px' }}
        >
          🌟 Launch 3D Surprise
        </button>
      </div>

      {showWand && (
        <div
          className="easter-egg-wand"
          title="Hidden Easter Egg"
          onClick={() => navigate('/secret')}
        >
          🪄
        </div>
      )}
    </div>
  );
}

export default App;
