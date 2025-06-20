import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Menu from './componentes/Menu';
import Diccionario from './componentes/Diccionario';
import TraductorBraille from './componentes/TraductorBraille';
import TraductorASCII from './componentes/TraductorASCII';

function App() {
  return (
    <div>
          <BrowserRouter>      
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/diccionario" element={<Diccionario />} />
                <Route path="/traductorbraille" element={<TraductorBraille />} />
                <Route path="/traductorascii" element={<TraductorASCII />} />
            </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;

