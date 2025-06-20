import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import NavBar from './NavBar';

import { LibroBrailleIcon, DedosBrailleIcon, EscrituraBrailleIcon } from './Icons';

const secciones = [
  { id: 1, nombre: 'Diccionario de Caracteres', path: '/diccionario', Icon: LibroBrailleIcon },
  { id: 2, nombre: 'Traducción a patrón Braille', path: '/traductorbraille', Icon: DedosBrailleIcon },
  { id: 3, nombre: 'Traducción a texto simple', path: '/traductorascii', Icon: EscrituraBrailleIcon },
];

export default function Menu() {
  return (
    <>
      <NavBar title="Menú principal" />
      <div className="menu-fondo">
        <h1 className="menu-titulo">Bienvenido/a. seleccione una sección...</h1>
        <nav className="menu-nav">
          {secciones.map(({ id, nombre, path, Icon }) => (
            <Link key={id} to={path} className="menu-item" style={{ animationDelay: `${id * 150}ms` }}>
              <Icon />
              <span className="menu-text">{nombre}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
