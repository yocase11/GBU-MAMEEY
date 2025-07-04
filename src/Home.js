import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Home() {
  const [mood, setMood] = useState(null);
  const navigate = useNavigate();

  const moods = ["happy", "sad", "anxious", "excited", "bored"];

  const handleClick = (m) => {
    setMood(m);
    navigate(`/hobbies?mood=${m}`);
  };

  return (
    <div className="app">
      <div className="glass-card">
        <h1 className="welcome-text">
          <span className="highlight">Welcome!</span> 👋
        </h1>
        <h2 className="question-text">How are you feeling today?</h2>

        <div className="mood-buttons">
          {moods.map((m) => (
            <button key={m} onClick={() => handleClick(m)} className="mood-button">
              {m.charAt(0).toUpperCase() + m.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
