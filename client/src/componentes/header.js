import React, { useEffect } from 'react';
import '../css/header.css';
import Logo from '../componentes/logo.js';
import imgLogo  from '../logo/LogoAfo.png';
import axios from 'axios';

const Header = ({IDuser, setUsuario,usuario}) => {

  useEffect(() => {
    axios.get('/usuario/'+IDuser)
    .then(res=>{setUsuario(res.data)})
  }, [IDuser,setUsuario]);


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
          <img src={usuario.foto} alt="Foto"/>
            <b><h1>☰</h1></b>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
