// import {useEffect, useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Lista from './pages/Lista'
import Formulario from './pages/Formulario'
import ElementoSinProps from './pages/Elemento'
import {withRouter} from './utils/withRouter'
// import axios from 'axios'
import Registro from './pages/Registro'
import InicioSesion from './pages/IniciarSesion'
const Elemento = withRouter(ElementoSinProps)

const App = ()=> {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lista" element={<Lista />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/inicioSesion" element={<InicioSesion />} />
        <Route path="/:endpoint/:id" element={<Elemento />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
