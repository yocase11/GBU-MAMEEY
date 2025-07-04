// src/MoodAIPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const MoodAIPage = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleDetectMood = () => {
    const lower = input.toLowerCase();

    if (lower.includes('happy') || lower.includes('joy')) {
      navigate('/happy');
    } else if (lower.includes('sad') || lower.includes('unhappy')) {
      navigate('/sad');
    } else if (lower.includes('anxious') || lower.includes('worried')) {
      navigate('/anxious');
    } else if (lower.includes('excited') || lower.includes('thrilled')) {
      navigate('/excited');
    } else {
      // Default redirect to Bored if no known mood is detected
      navigate('/spin');
    }
  };

  return (
    <div className="star-wars-bg w-screen h-screen flex items-center justify-center font-sans animate-fade-in">
      <div className="glass-box animate-scale-in">
        <h1 className="text-4xl text-white font-bold mb-6" style={{ fontFamily: "'Pacifico', cursive" }}>
          🧠 AI Mood Detector
        </h1>
        <p className="text-white text-lg mb-4">Type a sentence describing how you feel:</p>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows="4"
          className="w-full p-3 rounded-md border border-white text-black font-medium"
          placeholder="I'm feeling excited about the day..."
        />
        <div className="wheel-buttons mt-6">
          <button className="wheel-btn hover:animate-pulse" onClick={handleDetectMood}>
            🔍 Detect Mood
          </button>
          <button className="back-btn hover:animate-pulse" onClick={() => navigate('/')}>🔙 Back</button>
        </div>
      </div>
    </div>
  );
};

export default MoodAIPage;
