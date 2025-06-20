// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

// Importa el icono SVG que usas en el menú
import { LibroBrailleIcon } from './Icons';  // Ajusta la ruta según tu proyecto

export default function NavBar({ title = 'Menú principal', showBack = false }) {
  return (
    <header className="nav-bar">
      {showBack ? (
        <>
          <div className="nav-left">
            <Link to="/" className="nav-back">← Volver</Link>
          </div>
          <div className="nav-right">
            <span className="nav-title">{title}</span>
            <div className="nav-logo animated-logo">
              <LibroBrailleIcon />
            </div>
          </div>
        </>
      ) : (
        <div className="nav-left full">
          <div className="nav-logo animated-logo">
            <LibroBrailleIcon />
          </div>
          <span className="nav-title">{title}</span>
        </div>
      )}
    </header>
  );
}
