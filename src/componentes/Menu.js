import React from 'react';
import { Link } from 'react-router-dom';
import Carta from "./Carta";


const cartas = [
    {
      id: 1,
      title: "Caracteres",
      image: "/logo192.png",
      path: "/caracteres",
    },
    {
      id: 2,
      title: "Braille a ASCII",
      image: "/logo192.png",
      path: "/traducciones1",
    },
    {
      id: 3,
      title: "ASCII a Braille",
      image: "/logo192.png",
      path: "/traducciones2",
    },
  ];
  

function Menu() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
        <div className="row">
        {cartas.map(({ title, image, path, id }) => (
            <div className="col-md-4 px-4" key={id}>
            <Link to={path} style={{ textDecoration: "none" }}>
                <Carta imageSource={image} title={title} />
            </Link>
            </div>
        ))}
        </div>
  </div>
  );
}

export default Menu;


