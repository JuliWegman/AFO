import React,{useEffect, useState} from 'react';
import Logo from './logo';
import '../css/header.css';
import home from '../logo/home.png';
import alquiler from '../logo/alquiler.png';
import perfil from '../logo/perfil.png';
import mensaje from '../logo/mensaje.png';
import cerrarSesion from '../logo/cerrarSesion.png';

const Menu = ({ texto,open }) => {
  if (!open) {
    return null;
  }
  return (
    <div className='hamburguesa'>

    <div className="menu-container">
      
      <div className="menu-opciones">
        <div className='opcion'>
        <Logo img = {home}/>
        <p>Home</p>
        </div>
        <div className='opcion'>
          <Logo img = {alquiler}/>
          <p>Mis Alquileres</p>
        </div>
        <div className='opcion'>
        <Logo img = {mensaje}/>
        <p>Mensajes</p>
        </div>
        <div className='opcion'>
          <Logo img = {perfil}/>
          <p>Mi Perfil</p>
        </div>
        <div className='opcion'>
          <Logo img = {cerrarSesion}/>
          <p>Cerrar Sesion</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Menu;