// src/JournalPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function JournalPage() {
  const navigate = useNavigate();
  const [entry, setEntry] = useState('');

  const handleSave = () => {
    alert("Your thoughts are saved privately 🖊️");
    setEntry('');
  };

  return (
    <div className="star-wars-bg w-screen h-screen flex items-center justify-center">
      <div className="glass-box max-w-xl w-full">
        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Pacifico', cursive" }}>
          📝 Your Personal Journal
        </h1>
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          rows={8}
          placeholder="Write your thoughts here..."
          className="w-full p-4 rounded-xl bg-white bg-opacity-20 backdrop-blur-md text-white border border-white resize-none outline-none"
        />
        <div className="flex justify-between mt-4">
          <button className="wheel-btn" onClick={handleSave}>💾 Save</button>
          <button className="back-btn" onClick={() => navigate('/')}>🔙 Back</button>
        </div>
      </div>
    </div>
  );
}

export default JournalPage;
