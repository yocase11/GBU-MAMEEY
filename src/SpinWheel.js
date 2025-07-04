// src/SpinWheel.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wheel } from "react-custom-roulette";
import "./styles.css";

const data = [
  { option: '🎯 Play Chess' },
  { option: '🧩 Solve a Puzzle' },
  { option: '📺 Watch a Documentary' },
  { option: '🦢 Try Origami' },
  { option: '🎨 Draw Something' },
  { option: '🎩 Learn Magic Trick' },
  { option: '👩‍🍳 Cook Something New' },
  { option: '🕵️‍♂️ Secret Mission 👀' }, // Easter Egg
];

function SpinWheel() {
  const navigate = useNavigate();
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
    setShowEasterEgg(false);
  };

  const handleStopSpinning = () => {
    setMustSpin(false);

    const selected = data[prizeNumber].option;

    // Redirect based on the selected hobby
    if (selected.includes("Chess")) {
      navigate("https://www.chess.com", { replace: true }); // external link (optional)
    } else if (selected.includes("Puzzle")) {
      navigate("/minigames");
    } else if (selected.includes("Documentary")) {
      window.open("https://www.netflix.com/browse/genre/6839", "_blank");
    } else if (selected.includes("Origami")) {
      window.open("https://origami.me", "_blank");
    } else if (selected.includes("Draw")) {
      window.open("https://sketch.io/sketchpad/", "_blank");
    } else if (selected.includes("Magic")) {
      window.open("https://www.youtube.com/results?search_query=learn+magic+tricks", "_blank");
    } else if (selected.includes("Cook")) {
      window.open("https://www.tasty.co", "_blank");
    } else if (selected.includes("Secret Mission")) {
      setShowEasterEgg(true);
    }
  };


  return (
    <div className="star-wars-bg w-screen h-screen flex items-center justify-center font-sans animate-fade-in">
      <div className="glass-box animate-scale-in">
        <h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg animate-slide-in-top" style={{ fontFamily: "'Pacifico', cursive" }}>
          🎱 Spin the Hobby Wheel!
        </h1>

        <div className="flex justify-center mb-6 animate-bounce-in">
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            backgroundColors={["#FFADAD", "#FFD6A5", "#FDFFB6", "#CAFFBF"]}
            textColors={["#000"]}
            fontFamily="'Nunito', sans-serif"
            fontSize={12} // reduced font size
            onStopSpinning={handleStopSpinning}
          />
        </div>

        <div className="wheel-buttons animate-fade-up">
          <button
            onClick={handleSpinClick}
            className="wheel-btn hover:animate-pulse"
          >
            🎲 Spin Now
          </button>

          <button
            onClick={() => navigate("/")}
            className="back-btn hover:animate-pulse"
          >
            🔙 Back
          </button>
        </div>

        {showEasterEgg && (
          <div className="secret-message animate-jump-in">
            🥚 You've unlocked a secret hobby: <strong>Become a Jedi Knight!</strong> ⚔️ May the force be with you.
          </div>
        )}
      </div>
    </div>
  );
}

export default SpinWheel;
