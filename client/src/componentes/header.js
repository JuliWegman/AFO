import React from 'react';
import Logo from './logo';
import '../css/header.css';

const Header = () => {
  return (
    <header>
        <div className='ContainerH'>
                <div className='logo'>
                    <Logo destino="#Index" img={""} />
                </div>
                <div className='slogan'>
                    <p>Tu Lugar De Trabajo</p>
                </div>
                <div className='Desplegable'>
                    <img src="" alt='menu'/>
                </div>
            </div>
    </header>
  );
}

export default Header;