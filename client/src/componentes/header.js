import React, { useEffect,useState } from 'react';
import '../css/header.css';
import Logo from '../componentes/logo.js';
import imgLogo  from '../logo/LogoAfo.png';
// import axios from 'axios';
import Menu from './menu.js'

import { Link } from 'react-router-dom';



const Header = ({hamburguesa,setHamburguesa,usuario,open}) => {
  return (
    <>
        <div className='capa' id='capa2' onClick={()=>{setHamburguesa(false);const cap=document.getElementById("capa2"); cap.style.visibility='hidden';const scroll=document.getElementsByTagName("body");scroll[0].style.overflowY="auto"}}></div>

    <header id="header">
      <div className="ContainerH">
        <div className="Logo">
          <Link to='/'><Logo destino="#Index" img={imgLogo} /></Link>
        </div>
        <div className="slogan">
          <p>Tu Lugar De Trabajo</p>
        </div>
        <div className="menu">
          <div className='Rect'>
            <Link to='/perfil' className='link'><img className="link"  src={usuario.foto} alt="Foto"/></Link>
            <b><h1 onClick={()=>{open(); setHamburguesa(true);const cap=document.getElementById("capa2"); cap.style.visibility='visible'; const cap1=document.getElementById("capa1"); if(cap1!=null){ cap1.style.visibility='hidden'};const scroll=document.getElementsByTagName("body");scroll[0].style.overflowY="hidden"}}>☰</h1></b>
          </div>
        </div>
      </div>
    </header>
    <Menu open={hamburguesa} />
    
    </>
  );
};

export default Header;
