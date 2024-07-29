import React,{useState,useEffect} from 'react';
import '../css/desplegable.css';

const Desplegable = () => {
  const [open,setOpen]=useState(false);
  return (
    <div className="desplegable-menu">
      <div className='nav-logo'> LOGO</div>
      <div className='nav-items'>
      <a href="a">Home</a>
      <a href="a">Mis Alquileres</a>
      <a href="a">Mis Mensajes</a>
      <a href="a">Mi Perfil</a>
      <a href="a">Cerrar Sesión</a>
      </div>

      <div className='nav-toggle'>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Desplegable;
