import React from 'react';
import Logo from './logo';
import '../css/header.css';
import home from '../logo/home.png';
import alquiler from '../logo/alquiler.png';
import perfil from '../logo/perfil.png';
import mensaje from '../logo/mensaje.png';
import cerrarSesion from '../logo/cerrarSesion.png';
import { Link } from 'react-router-dom';

const Menu = ({ texto,open }) => {
  if (!open) {
    return null;
  }
  return (
    <div className='hamburguesa'>

    <div className="menu-container">
      
      <div className="menu-opciones">
        <div className='opcion'>
        <Link to='/'><Logo img = {home}/></Link>
        <p><Link to='/'>Home</Link></p>
        </div>
        <div className='opcion'>
          <Link to='/alquileres'><Logo img = {alquiler}/></Link>
          <p><Link to='/alquileres'>Mis alquileres</Link></p>
        </div>
        <div className='opcion'>
        <Link to='/mensaje'><Logo img = {mensaje}/></Link>
        <p><Link to ='/mensaje'>Mensajes</Link></p>
        </div>
        <div className='opcion'>
        <Link to='/perfil'><Logo img = {perfil}/></Link>
        <p><Link to ='/perfil'>Mi Perfil</Link></p>
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