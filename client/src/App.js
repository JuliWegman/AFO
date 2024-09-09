import React,{useState} from 'react'
import OficinaEnEspecial from './views/oficinaEnEspecial.js';
import Home from "./views/Home.js";
import Mensajes from "./views/Mensajes.js"
import Header from './componentes/header.js';
import Footer from './componentes/footer.js';
import Chat from "./componentes/chat.js";
import Perfil from "./componentes/perfil.js";
import './css/oficinaEnEspecial.css'
import {
  BrowserRouter as Router, Route, Routes  
} from "react-router-dom";

import { createClient } from '@supabase/supabase-js';
const BDconfig={
    key:process.env.KEY_SUPABASE ||"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJieWp0a2N0ZXN0ZGRmenJreHVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0MTYxNzMsImV4cCI6MjAzMjk5MjE3M30.7tVPa4prqRVWLhuISTg97e1eulZv09UqD-p5Pca4nx8"
    ,url:process.env.URL_SUPABASE ||"https://bbyjtkctestddfzrkxug.supabase.co"
  }
const base=createClient(BDconfig.url,BDconfig.key)

const IDusuario=3;

function App() {
  const [usuario,setUsuario]=useState({})
  const [popUpMensaje,setPopUpMensaje]=useState(false)
  const [splideFoto,setSplideFoto]=useState(false)
  const [hamburguesa,setHamburguesa]=useState(false)
  const [IDoficina,setIDoficina]=useState(1)
  return (  
      <Router>
        <div className='TODO' id="todo">
          <div className="TODO" id="home">
            <Header hamburguesa={hamburguesa} setHamburguesa={setHamburguesa} IDuser={IDusuario} setUsuario={setUsuario} usuario={usuario} open={()=>{setPopUpMensaje(false);setSplideFoto(false);}}/>    
            
            <Routes>
              <Route path='/' element={
                <Home setIDoficina={setIDoficina} setHamburguesa={()=>{
                  setHamburguesa(false);
                  const cap=document.getElementById("capa2"); 
                  cap.style.visibility='hidden';
                  const scroll=document.getElementsByTagName("body");
                  scroll[0].style.overflowY="auto"}} 
                  BD={base} splideFoto={splideFoto} setSplideFoto={setSplideFoto} popUpMensaje={popUpMensaje} setPopUpMensaje={setPopUpMensaje} usuario={usuario} setUsuario={setUsuario}/>}>
              </Route>
             
              <Route path='/oficina' element={
              <OficinaEnEspecial IdOficina={IDoficina} setHamburguesa={()=>{
                  setHamburguesa(false);
                  const cap=document.getElementById("capa2");
                  cap.style.visibility='hidden';
                  const scroll=document.getElementsByTagName("body");
                  scroll[0].style.overflowY="auto"}} 
                  BD={base} splideFoto={splideFoto} setSplideFoto={setSplideFoto} popUpMensaje={popUpMensaje} setPopUpMensaje={setPopUpMensaje} usuario={usuario} setUsuario={setUsuario}/>}>
              </Route>
             
              <Route path='/mensaje' element={
                <Mensajes/>
              }></Route>
            </Routes>
            
            
          
          </div>
        </div>
      </Router>
    )
}
export default App
