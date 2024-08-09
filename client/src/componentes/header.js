import React, { useEffect,useState } from 'react';
import '../css/header.css';
import Logo from '../componentes/logo.js';
import imgLogo  from '../logo/LogoAfo.png';
// import axios from 'axios';
import Menu from './menu.js'

import { createClient } from '@supabase/supabase-js'

const BDconfig={
  key:process.env.KEY_SUPABASE ||"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJieWp0a2N0ZXN0ZGRmenJreHVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0MTYxNzMsImV4cCI6MjAzMjk5MjE3M30.7tVPa4prqRVWLhuISTg97e1eulZv09UqD-p5Pca4nx8"
  ,url:process.env.URL_SUPABASE ||"https://bbyjtkctestddfzrkxug.supabase.co"
}
const BD=createClient(BDconfig.url,BDconfig.key)

const Header = ({IDuser, setUsuario,usuario,open}) => {

  useEffect(() => {

    async function fetchData(){
      const res3=await BD.from('usuario').select().eq('id_usuario',IDuser).maybeSingle()
      setUsuario(res3.data)
    }
    // axios.get('/usuario/'+IDuser)
    // .then(res=>{setUsuario(res.data)})
    fetchData();
  }, [IDuser,setUsuario]);

  const [hamburguesa,setHamburguesa]=useState(false)

  return (
    <>
        <div className='capa' id='capa2' onClick={()=>{setHamburguesa(false);const cap=document.getElementById("capa2"); cap.style.visibility='hidden';const scroll=document.getElementsByTagName("body");scroll[0].style.overflowY="auto"}}></div>

    <header>
      <div className="ContainerH">
        <div className="Logo">
          <Logo destino="#Index" img={imgLogo} />
        </div>
        <div className="slogan">
          <p>Tu Lugar De Trabajo</p>
        </div>
        <div className="menu">
          <div className='Rect'>
            <img src={usuario.foto} alt="Foto"/>
            <b><h1 onClick={()=>{open(); setHamburguesa(true);const cap=document.getElementById("capa2"); cap.style.visibility='visible'; const cap1=document.getElementById("capa1"); cap1.style.visibility='hidden';const scroll=document.getElementsByTagName("body");scroll[0].style.overflowY="hidden"}}>☰</h1></b>
          </div>
        </div>
      </div>
    </header>
    <Menu open={hamburguesa} />
    
    </>
  );
};

export default Header;
