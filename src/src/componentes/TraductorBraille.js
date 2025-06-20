import React, { useState } from 'react';
import NavBar from './NavBar';
import './TraductorBraille.css';

const brailleMap = {
  a: '⠁', b: '⠃', c: '⠉', d: '⠙', e: '⠑',
  f: '⠋', g: '⠛', h: '⠓', i: '⠊', j: '⠚',
  k: '⠅', l: '⠇', m: '⠍', n: '⠝', o: '⠕',
  p: '⠏', q: '⠟', r: '⠗', s: '⠎', t: '⠞',
  u: '⠥', v: '⠧', w: '⠺', x: '⠭', y: '⠽', z: '⠵',
  ' ': ' ',
  '.': '⠲', ',': '⠂', '?': '⠦', '!': '⠖',
  '\'': '⠄', '-': '⠤', ':': '⠱', ';': '⠰',
  '1': '⠁', '2': '⠃', '3': '⠉', '4': '⠙', '5': '⠑',
  '6': '⠋', '7': '⠛', '8': '⠓', '9': '⠊', '0': '⠚',
};

function convertToBraille(text) {
  return text
    .toLowerCase()
    .split('')
    .map(char => brailleMap[char] || '⍰')
    .join('');
}

const TraductorBraille = () => {
  const [input, setInput] = useState('');

  return (
    <>
      <NavBar title="ASCII a Braille" showBack={true} />

      <main className="braille-container" role="main">
        <label htmlFor="textoBraille" className="input-label">
          Ingresa el texto a traducir:
        </label>
        <textarea
          id="textoBraille"
          className="braille-textarea" 
          rows="6"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Escribe tu texto aquí..."
          aria-describedby="textoAyuda"
          aria-label="Entrada de texto para traducir a Braille"
        />
        <div id="textoAyuda" className="input-help">
          Puedes escribir letras, números y algunos signos de puntuación.
        </div>

        <div className="braille-output-title">Resultado en Braille:</div>
        <div
          className="braille-output"
          aria-live="polite"
          aria-atomic="true"
          tabIndex={0}
        >
          {convertToBraille(input)}
        </div>
      </main>
    </>
  );
};

export default TraductorBraille;
