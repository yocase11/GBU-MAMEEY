import React, { useState } from 'react';
import './styles.css';

function Notepad() {
  const [text, setText] = useState('');

  return (
    <div className="star-wars-bg w-screen h-screen flex items-center justify-center font-sans">
      <div className="glass-box w-full max-w-4xl p-10 text-white">
        <h1 className="text-4xl font-bold mb-6 text-white" style={{ fontFamily: "'Pacifico', cursive" }}>
          📝 Personal Notepad
        </h1>
        <textarea
          className="w-full h-96 p-4 rounded-xl text-black text-lg"
          placeholder="Write your thoughts here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Notepad;
