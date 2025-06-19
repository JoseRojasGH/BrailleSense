import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Menu from './componentes/Menu';
import Caracteres from './componentes/Caracteres';
import Traduccion1 from './componentes/Traduccion1';
import Traduccion2 from './componentes/Traduccion2';

function App() {
  return (
    <div>
          <BrowserRouter>      
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/caracteres" element={<Caracteres />} />
                <Route path="/traduccion1" element={<Traduccion1 />} />
                <Route path="/traduccion2" element={<Traduccion2 />} />
            </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;


