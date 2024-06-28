import React, { useState, useEffect } from 'react';
import '../css/header.css';
import axios from 'axios';

const Header = () => {
  const [fotoUsuario, setFotoUser] = useState({});

  useEffect(() => {
    axios.get('/usuario/2')
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
        <div className="menu">
          <div className='Rect'>
            <b><h3>☰</h3></b>
            <img src={fotoUsuario.foto}/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
