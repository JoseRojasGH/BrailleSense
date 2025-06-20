import React, { useState, useEffect } from 'react';
import './Diccionario.css';
import NavBar from './NavBar'; 

const letras = {
  A: '⠁', B: '⠃', C: '⠉', D: '⠙', E: '⠑',
  F: '⠋', G: '⠛', H: '⠓', I: '⠊', J: '⠚',
  K: '⠅', L: '⠇', M: '⠍', N: '⠝', O: '⠕',
  P: '⠏', Q: '⠟', R: '⠗', S: '⠎', T: '⠞',
  U: '⠥', V: '⠧', W: '⠺', X: '⠭', Y: '⠽', Z: '⠵',
};

const numeros = {
  '1': '⠁', '2': '⠃', '3': '⠉', '4': '⠙', '5': '⠑',
  '6': '⠋', '7': '⠛', '8': '⠓', '9': '⠊', '0': '⠚',
};

const especiales = {
  '.': '⠲', ',': '⠂', '?': '⠦', '!': '⠖',
  '\'': '⠄', '-': '⠤', ':': '⠱', ';': '⠰', ' ': ' ',
};

const secciones = {
  Letras: letras,
  Números: numeros,
  'Especiales': especiales,
};

function getBrailleDots(brailleChar) {
  const code = brailleChar.charCodeAt(0);
  const dots = code - 0x2800;
  return [
    (dots & 0x01) !== 0,
    (dots & 0x02) !== 0,
    (dots & 0x04) !== 0,
    (dots & 0x08) !== 0,
    (dots & 0x10) !== 0,
    (dots & 0x20) !== 0
  ];
}

const Ficha = ({ char, braille }) => {
  const dots = getBrailleDots(braille);
  return (
    <div className="pagina">
      <div className={`ascii-letra ${char === ' ' ? 'espacio' : ''}`}>
        {char === ' ' ? 'ESPACIO' : char}
      </div>
      <div className="braille">
        <div className="col">
          <span className={`dot ${dots[0] ? 'active' : ''}`}></span>
          <span className={`dot ${dots[1] ? 'active' : ''}`}></span>
          <span className={`dot ${dots[2] ? 'active' : ''}`}></span>
        </div>
        <div className="col">
          <span className={`dot ${dots[3] ? 'active' : ''}`}></span>
          <span className={`dot ${dots[4] ? 'active' : ''}`}></span>
          <span className={`dot ${dots[5] ? 'active' : ''}`}></span>
        </div>
      </div>
    </div>
  );
};

const Diccionario = () => {
  const [seccion, setSeccion] = useState('Letras');
  const entries = Object.entries(secciones[seccion]);
  const [pagina, setPagina] = useState(0);

  useEffect(() => {
    setPagina(0);
  }, [seccion]);

  const leftIndex = pagina * 2;
  const rightIndex = leftIndex + 1;
  const izquierda = entries[leftIndex];
  const derecha = entries[rightIndex];

  const avanzar = () => {
    if (rightIndex + 1 < entries.length) setPagina(p => p + 1);
  };

  const retroceder = () => {
    if (pagina > 0) setPagina(p => p - 1);
  };

  return (
    <>
      <NavBar title="Diccionario Braille" showBack={true} />

      <div className="fondo-libro">
        <nav className="nav-secciones">
          {Object.keys(secciones).map(key => (
            <button
              key={key}
              onClick={() => setSeccion(key)}
              className={seccion === key ? 'activo' : ''}
              aria-label={`Ir a la sección ${key}`}
            >
              {key}
            </button>
          ))}
        </nav>
        <div className="libro-real">
          <div className="pagina-izquierda">
            {izquierda && <Ficha char={izquierda[0]} braille={izquierda[1]} />}
          </div>
          <div className="pagina-derecha">
            {derecha && <Ficha char={derecha[0]} braille={derecha[1]} />}
          </div>
        </div>
        <div className="controles-libro">
          <button onClick={retroceder} disabled={pagina === 0}>⬅</button>
          <span>Página {pagina + 1}</span>
          <button onClick={avanzar} disabled={rightIndex + 1 >= entries.length}>➡</button>
        </div>
      </div>
    </>
  );
};

export default Diccionario;
