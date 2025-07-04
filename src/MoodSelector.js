// MoodSelector.js
import React from "react";
import { useNavigate } from "react-router-dom";

const MoodSelector = () => {
  const navigate = useNavigate();

  const handleMoodClick = (mood) => {
    navigate(`/hobbies/${mood}`);
  };

  return (
    <>
      <h1 className="title">Welcome, Yogesh! 👋</h1>
      <h2 className="subtitle">How are you feeling today?</h2>
      <div className="button-group">
        {["Happy", "Sad", "Anxious", "Excited", "Bored"].map((mood) => (
          <button key={mood} onClick={() => handleMoodClick(mood.toLowerCase())}>
            {mood}
          </button>
        ))}
      </div>
    </>
  );
};

export default MoodSelector;
