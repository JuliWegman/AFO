import React,{useState,useEffect} from 'react';
import Chat from "../componentes/chat.js";

const Mensajes=({setHamburguesa})=> {


    useEffect(()=>{
        setHamburguesa()
    },[])

    return(
        <>
        <Chat/>
        </>
        
    )
}

export default Mensajes