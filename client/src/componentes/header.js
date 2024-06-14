import React from 'react';
import Logo from './logo';
import Desplegable from './Desplegable';
import '../css/header.css';

const Header = () => {
  return (
    <header>
        <div className='Container'>
            <div className='logo'>
                <Logo destino="#Index" img={""} />
            </div>
            <div className='slogan'>
                <p>Tu Lugar De Trabajo</p>
            </div>
            <div className='desplegable'>
                <Desplegable texto="Home" />
                <Desplegable texto="educación" />
                <Desplegable texto="consultoría" />
                <Desplegable texto="diseño" />
                <Desplegable texto="desarrollo personal"/>
            </div>
        </div>
    </header>
  );
}

export default Header;