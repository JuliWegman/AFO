import React,{useState,useEffect} from 'react'

import OficinaEnEspecial from './views/oficinaEnEspecial.js';
import Home from "./views/Home.js";
import Mensajes from "./views/Mensajes.js"
import Header from './componentes/header.js';
import Perfil from "./views/Perfil.js";
import Alquileres from "./views/alquileres.js"

import './css/oficinaEnEspecial.css';

import {
  BrowserRouter as Router, Route, Routes  
} from "react-router-dom";


import axios from 'axios';



const IDusuario=1;

function App() {
  const [usuario,setUsuario]=useState({})
  const [popUpMensaje,setPopUpMensaje]=useState(false)
  const [splideFoto,setSplideFoto]=useState(false)
  const [hamburguesa,setHamburguesa]=useState(false)
  const [IDoficina,setIDoficina]=useState(1)
  const [IDperfil,setIDperfil]=useState(1)
  const [abierto,setAbierto]=useState(false)

    function reset(){
      setHamburguesa(false);
      const cap=document.getElementById("capa2");
      cap.style.visibility='hidden';
      const scroll=document.getElementsByTagName("body");
      scroll[0].style.overflowY="auto"
    }
    useEffect(()=>{


      async function getData(){
        const res=await axios.get('/usuario/'+IDusuario)
        setUsuario(res.data)
        setAbierto(true)
      } 
      
      getData()
        

    },[])

  if (!abierto) return null

  return (  
      <Router>
        <div className='TODO' id="todo">
          <div className="TODO" id="home">
            <Header setIDperfil={setIDperfil} hamburguesa={hamburguesa} setHamburguesa={setHamburguesa} usuario={usuario} open={()=>{setPopUpMensaje(false);setSplideFoto(false);}}/>    

            <Routes>
              <Route path='/' element={
                <Home setIDoficina={setIDoficina} setHamburguesa={reset} 
                   splideFoto={splideFoto} setSplideFoto={setSplideFoto} popUpMensaje={popUpMensaje} setPopUpMensaje={setPopUpMensaje} usuario={usuario} setUsuario={setUsuario}/>}>
              </Route>
             
              <Route path='/oficina' element={
              <OficinaEnEspecial IdOficina={IDoficina} setHamburguesa={reset} splideFoto={splideFoto} setSplideFoto={setSplideFoto} popUpMensaje={popUpMensaje} setPopUpMensaje={setPopUpMensaje} usuario={usuario} />}>
              </Route>
             
              <Route path='/mensaje' element={
                <Mensajes setIDperfil={setIDperfil} setHamburguesa={reset} usuario={usuario}/>
              }></Route>

              <Route path='/perfil' element={
                <Perfil setHamburguesa={reset} idUsuario={IDusuario}/>
              }></Route>

              <Route path='/alquileres' element={
                <Alquileres setIDoficina={setIDoficina} setHamburguesa={reset} usuario={usuario}/>
              }></Route>
              

              <Route path='/corazon' element={
                <ion-icon name="heart" size='large'></ion-icon>
              }></Route>
            </Routes>
            
            
          
          </div>
        </div>
      </Router>
    )
}
export default App
