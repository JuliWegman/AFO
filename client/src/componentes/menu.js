import React,{useEffect, useState} from 'react';
import '../css/header.css';

const Menu = ({ texto,open }) => {
  if (!open) {
    return null;
  }
  return (
    <div className='hamburguesa'>

    <div className="menu-container">
      
      <div className="menu-opciones">
        <p>Home</p>
        <p>Mis Alquileres</p>
        <p>Mensajes</p>
        <p>Mi Perfil</p>
        <p>Cerrar Sesion</p>
      </div>
    </div>
    </div>
  );
};

export default Menu;