import React from 'react';
import { Link } from 'react-router-dom';


const ChatUser = ({mensaje,index,setIndex}) => {
    return (
        <div className='conteinerChat2' onClick={()=>setIndex(index)}>
            <img src={mensaje.fotoUser} alt=""/>
            <h1>{mensaje.nombreUser}</h1>

        </div>
    );
    
};
export default ChatUser