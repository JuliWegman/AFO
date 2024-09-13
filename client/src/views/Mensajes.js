import React,{useState,useEffect} from 'react';
import Chat from "../componentes/chat.js";
import listaMensaje from '../componentes/listaMensaje.js';
import axios from 'axios';
import '../css/mensajes.css'
const Mensajes=({setHamburguesa,usuario})=> {
    const [abierto,setAbierto]=useState(false)
    const [mensajes,setMensajes]=useState([""])
    const [chats,setChats]=useState([""])

    useEffect(()=>{
        async function getData(){
            const res2=await axios.get('/mensaje/'+usuario.id_usuario)
            setMensajes(res2.data)
            setAbierto(true)
        }

        getData()
        setHamburguesa()
    },[])
    
    if (!abierto) return null
    return(
        <div className='Mensajes'>
        <listaMensaje/>
        <Chat/>
        <img src={mensajes[0].fotoUser} alt='Foto user'/>
        </div>
    )
}

export default Mensajes