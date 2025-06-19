import React, { useState } from "react";
import './Caracteres.css';

const braillePatterns = {
  A: [1, 0, 0, 0, 0, 0], B: [1, 1, 0, 0, 0, 0], C: [1, 0, 1, 0, 0, 0], D: [1, 0, 1, 1, 0, 0],
  E: [1, 0, 0, 1, 0, 0], F: [1, 1, 1, 0, 0, 0], G: [1, 1, 1, 1, 0, 0], H: [1, 1, 0, 1, 0, 0],
  I: [0, 1, 1, 0, 0, 0], J: [0, 1, 1, 1, 0, 0], K: [1, 0, 0, 0, 1, 0], L: [1, 1, 0, 0, 1, 0],
  M: [1, 0, 1, 0, 1, 0], N: [1, 0, 1, 1, 1, 0], O: [1, 0, 0, 1, 1, 0], P: [1, 1, 1, 0, 1, 0],
  Q: [1, 1, 1, 1, 1, 0], R: [1, 1, 0, 1, 1, 0], S: [0, 1, 1, 0, 1, 0], T: [0, 1, 1, 1, 1, 0],
  U: [1, 0, 0, 0, 1, 1], V: [1, 1, 0, 0, 1, 1], W: [0, 1, 1, 1, 1, 0], X: [1, 0, 1, 0, 1, 1],
  Y: [1, 0, 1, 1, 1, 1], Z: [1, 0, 0, 1, 1, 1],
  "0": [0, 1, 1, 1, 1, 0], "1": [1, 0, 0, 0, 0, 0], "2": [1, 1, 0, 0, 0, 0], "3": [1, 0, 1, 0, 0, 0],
  "4": [1, 0, 1, 1, 0, 0], "5": [1, 0, 0, 1, 0, 0], "6": [1, 1, 1, 0, 0, 0], "7": [1, 1, 1, 1, 0, 0],
  "8": [1, 1, 0, 1, 0, 0], "9": [0, 1, 1, 0, 0, 0]
};

const colors = [
  '#ff6347', '#ffa07a', '#f0e68c', '#90ee90', '#add8e6', '#dda0dd', '#ff1493', '#7fff00', '#32cd32', '#ff4500',
  '#ff69b4', '#8a2be2', '#7b68ee', '#98fb98', '#ff8c00', '#d2691e', '#8b0000', '#b8860b', '#ff00ff', '#8b008b'
];

const Caracteres = () => {
  const brailleCompatibleCodes = [
    ...Array.from({ length: 26 }, (_, i) => i + 97),  // solo minúsculas
    ...Array.from({ length: 10 }, (_, i) => i + 48),
    33, 34, 39, 40, 41, 44, 45, 46, 58, 59, 63,
  ];

  const asciiChars = brailleCompatibleCodes.map(code => ({
    code,
    char: String.fromCharCode(code),
  }));

  const [selectedChar, setSelectedChar] = useState(null);
  const [popupColor, setPopupColor] = useState(null);

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("popup-overlay")) {
      setSelectedChar(null);
    }
  };

  const handleCharClick = (charData) => {
    setSelectedChar(charData);
    setPopupColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  const BrailleRepresentation = ({ char }) => {
    const pattern = braillePatterns[char] || [0, 0, 0, 0, 0, 0];
    return (
      <div className="braille-container">
        <div className="braille-row">
          <div className={`braille-point ${pattern[0] ? 'filled' : ''}`}></div>
          <div className={`braille-point ${pattern[2] ? 'filled' : ''}`}></div>
        </div>
        <div className="braille-row">
          <div className={`braille-point ${pattern[1] ? 'filled' : ''}`}></div>
          <div className={`braille-point ${pattern[3] ? 'filled' : ''}`}></div>
        </div>
        <div className="braille-row">
          <div className={`braille-point ${pattern[4] ? 'filled' : ''}`}></div>
          <div className={`braille-point ${pattern[5] ? 'filled' : ''}`}></div>
        </div>
      </div>
    );
  };

  return (
    <div className="caracteres-container">
      <h1>Caracteres ASCII con Símil en Braille</h1>

      <div className={`character-table ${selectedChar ? "blur-background" : ""}`}>
        {asciiChars.map(({ code, char }, index) => (
          <div
            key={code}
            className={`character-box ${index % 2 === 0 ? "bg-purple" : "bg-orange"}`}
            onClick={() => handleCharClick({ code, char })}
          >
            {char}
          </div>
        ))}
      </div>

      {selectedChar && (
        <div className="popup-overlay" onClick={handleOutsideClick}>
          <div className="popup-content">
            <div className="popup-dominó">
              <div className="braille-top" style={{ color: popupColor }}>
                <BrailleRepresentation char={selectedChar.char} />
              </div>
              <div className="separator-line"></div>
              <div className="braille-bottom" style={{ color: popupColor }}>
                <span>{selectedChar.char}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Caracteres;
