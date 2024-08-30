import React,{useState} from 'react'
import OficinaEnEspecial from './views/oficinaEnEspecial.js';
import Home from "./views/Home.js";
import Header from './componentes/header.js';
import Footer from './componentes/footer.js';
import './css/oficinaEnEspecial.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { createClient } from '@supabase/supabase-js';
const BDconfig={
    key:process.env.KEY_SUPABASE ||"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJieWp0a2N0ZXN0ZGRmenJreHVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0MTYxNzMsImV4cCI6MjAzMjk5MjE3M30.7tVPa4prqRVWLhuISTg97e1eulZv09UqD-p5Pca4nx8"
    ,url:process.env.URL_SUPABASE ||"https://bbyjtkctestddfzrkxug.supabase.co"
  }
const base=createClient(BDconfig.url,BDconfig.key)

const IDusuario=3;

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

function App() {
  const [usuario,setUsuario]=useState({})
  const [popUpMensaje,setPopUpMensaje]=useState(false)
  const [splideFoto,setSplideFoto]=useState(false)

  return (
    
      <div className='TODO' id="todo">
      <div className="TODO" id="home">
        <Header IDuser={IDusuario} setUsuario={setUsuario} usuario={usuario} open={()=>{setPopUpMensaje(false);setSplideFoto(false);}}/>     
        <OficinaEnEspecial BD={base} splideFoto={splideFoto} setSplideFoto={setSplideFoto} popUpMensaje={popUpMensaje} setPopUpMensaje={setPopUpMensaje} usuario={usuario} setUsuario={setUsuario}/>  
        <div className='footer'>
        <Footer/>
      </div>
      
      </div>
      </div>
    )
}
export default App


<Navbar/>
<Profile/>
</Footer>