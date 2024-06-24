import React, { useState, useEffect } from 'react';
import Desplegable from './desplegable';
import '../css/header.css';
import axios from 'axios';

const Header = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const [usuario, setFotoUser] = useState({});

  useEffect(() => {
    axios.get('/usuario/1')
    .then(res=>{setFotoUser(res.data)})
  }, []);


  return (
    <header>
      <div className="ContainerH">
        <div className="Logo">
          <img src="../public/afo.png" alt="logo"/>
        </div>
        <div className="slogan">
          <p>Tu Lugar De Trabajo</p>
        </div>
        <div className="menu" onClick={() => setMostrarMenu(!mostrarMenu)}>
          <img src= {usuario.foto} alt='user'/>
          <b><h3>☰</h3></b>
        </div>
        {mostrarMenu && <Desplegable />}
      </div>
    </header>
  );
};

export default Header;
