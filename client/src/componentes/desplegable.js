import React, { useState } from 'react';
import '../css/desplegable.css';

const Desplegable = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="desplegable-menu">
      <div className='nav-logo'>LOGO</div>
      <div className={`nav-items ${open ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#alquileres">Mis Alquileres</a>
        <a href="#mensajes">Mis Mensajes</a>
        <a href="#perfil">Mi Perfil</a>
        <a href="#cerrar">Cerrar Sesión</a>
      </div>
      <div className={`nav-toggle ${open ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Desplegable;
