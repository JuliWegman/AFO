import React, { useState, useEffect } from 'react';
import '../css/header.css';
import Logo from '../componentes/logo.js';
import imgLogo  from '../logo/LogoAfo.png';
import axios from 'axios';

const Header = ({user}) => {
  const [fotoUsuario, setFotoUser] = useState({});

  useEffect(() => {
    axios.get('/usuario/'+user)
    .then(res=>{setFotoUser(res.data)})
  }, [user]);


  return (
    <header>
      <div className="ContainerH">
        <div className="Logo">
          <Logo destino="#Index" img={imgLogo} />
        </div>
        <div className="slogan">
          <p>Tu Lugar De Trabajo</p>
        </div>
        <div className="menu">
          <div className='Rect'>
          <img src={fotoUsuario.foto} alt="Foto"/>
            <b><h1>☰</h1></b>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
