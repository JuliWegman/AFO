import React,{useEffect, useState} from 'react';
import '../css/header.css';

const Menu = ({ texto }) => {
  return (
    <div className="menu-container">
      <button className="menu-button">
        {texto}
      </button>
      <ul className="menu-opciones">
        <li>Home</li>
        <li>Mis Alquileres</li>
        <li>Mensajes</li>
        <li>Mi Perfil</li>
        <li>Cerrar Sesion</li>
      </ul>
    </div>
  );
};

export default Menu;