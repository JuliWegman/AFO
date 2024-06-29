import React from 'react';
import '../css/footer.css';
import Logo from '../componentes/logo.js';
import imgLogo from '../logo/LogoAfo.png';

const Footer = () => {
  return (
    <footer>
        <div className= "ContainerF">
            <div className='contF'>
              <Logo destino="#Index" img={imgLogo} />
              <p>Copyright © 2024 AFO</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
