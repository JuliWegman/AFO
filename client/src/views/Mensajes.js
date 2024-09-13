import React,{useState,useEffect} from 'react';
import Chat from "../componentes/chat.js";
import axios from 'axios';
const Mensajes=({setHamburguesa})=> {
    const [usuarios,setUsuarios]=useState([""])
    const [mensajes, setMensajes]=useState([""])

    useEffect(()=>{
        axios.get('/usuario')
        .then(res=>{setUsuarios(res.data)})
        setHamburguesa()
    },[])
    

    return(
        <>
        <Chat/>
        </>
        
    )
}

export default Mensajes