import React, { useState } from 'react';
import NavBar from './NavBar';
import './TraductorASCII.css';

const secciones = {
  Letras: [
    '⠁','⠃','⠉','⠙','⠑','⠋','⠛','⠓','⠊','⠚',
    '⠅','⠇','⠍','⠝','⠕','⠏','⠟','⠗','⠎','⠞',
    '⠥','⠧','⠺','⠭','⠽','⠵',
  ],
  Numeros: [
    '⠁','⠃','⠉','⠙','⠑','⠋','⠛','⠓','⠊','⠚'
  ],
  Especiales: [
    '⠼', '⠲', '⠂', '⠦', '⠖', '⠄', '⠤', '⠱', '⠰', ' '
  ]
};

const brailleMaps = {
  Letras: {
    '⠁': 'a', '⠃': 'b', '⠉': 'c', '⠙': 'd', '⠑': 'e',
    '⠋': 'f', '⠛': 'g', '⠓': 'h', '⠊': 'i', '⠚': 'j',
    '⠅': 'k', '⠇': 'l', '⠍': 'm', '⠝': 'n', '⠕': 'o',
    '⠏': 'p', '⠟': 'q', '⠗': 'r', '⠎': 's', '⠞': 't',
    '⠥': 'u', '⠧': 'v', '⠺': 'w', '⠭': 'x', '⠽': 'y', '⠵': 'z',
  },
  Numeros: {
    '⠁': '1', '⠃': '2', '⠉': '3', '⠙': '4', '⠑': '5',
    '⠋': '6', '⠛': '7', '⠓': '8', '⠊': '9', '⠚': '0',
  },
  Especiales: {
    '⠼': '#', '⠲': '.', '⠂': ',', '⠦': '?', '⠖': '!',
    '⠄': '\'', '⠤': '-', '⠱': ':', '⠰': ';', ' ': ' '
  }
};

const TraductorASCII = () => {
  const [droppedBraille, setDroppedBraille] = useState([]); 
  const [seccion, setSeccion] = useState('Letras');

  const onDragStart = (e, symbol) => {
    e.dataTransfer.setData('text/plain', symbol);
  };

  const onDrop = (e) => {
    e.preventDefault();
    const symbol = e.dataTransfer.getData('text/plain');
    setDroppedBraille(prev => [...prev, { symbol, section: seccion }]);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onClear = () => {
    setDroppedBraille([]);
  };

  const convertBrailleToText = () => {
    return droppedBraille
      .map(({ symbol, section }) => {
        const mapa = brailleMaps[section];
        return mapa[symbol] || '?';
      })
      .join('');
  };

  return (
    <>
      <NavBar title="Braille a ASCII" showBack={true} />
      <main className="braille-container">
        <nav className="nav-secciones">
          {Object.keys(secciones).map(key => (
            <button
              key={key}
              onClick={() => setSeccion(key)}
              className={seccion === key ? 'activo' : ''}
            >
              {key}
            </button>
          ))}
        </nav>

        <section>
          <strong>Símbolos Braille (Arrástralos):</strong>
          <div className="braille-symbols">
            {secciones[seccion].map((sym, i) => (
              <div
                key={i}
                draggable
                onDragStart={e => onDragStart(e, sym)}
                className="braille-symbol"
              >
                {sym}
              </div>
            ))}
          </div>
        </section>

        <div
          onDrop={onDrop}
          onDragOver={onDragOver}
          className="braille-drop-area"
        >
          {droppedBraille.length > 0
            ? droppedBraille.map((b, i) => b.symbol).join('')
            : 'Suelta aquí los símbolos Braille...'}
        </div>

        <button className="btn-clear" onClick={onClear}>Limpiar</button>

        <div className="braille-output-title">Texto ASCII traducido:</div>
        <div className="braille-output">{convertBrailleToText()}</div>
      </main>
    </>
  );
};

export default TraductorASCII;
