import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chat from "../componentes/chat.js";
import ChatUser from "../componentes/chatUser.js"
import '../css/mensajes.css';

const Mensajes = ({ setHamburguesa, usuario }) => {
    const [mensajes, setMensajes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [indexActual,setIndex]=useState(null)
    const [a,setA]=useState(0)

    async function PostMensaje(contenido,id_receptor){
        if (contenido!=null && contenido!="") {
            axios.post('/mensaje',{
                "id_enviador":usuario.id_usuario,
                "id_receptor":id_receptor,
                "contenido":contenido,
                "mail":usuario.mail,
                "telefono":usuario.telefono,
                "fecha":new Date(Date.now())
              })
              setA(a+1)
        }
        
     }


    

    useEffect(() => {
        async function getData() {
            try {
                const res2 = await axios.get(`/mensaje/${usuario.id_usuario}`);
                setMensajes(res2.data);
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener los mensajes:', error);
                setError('Error al obtener los mensajes.');
                setLoading(false);
            }
        }
        
        setHamburguesa(true);
        getData();
        console.log(mensajes);
    }, [a]);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className='Mensajes'>
            <Chat mandar={PostMensaje} mensajes={mensajes} index={indexActual} setIndex={setIndex} id_usuario={usuario.id_usuario}/>

        </div>
            
    );
};

export default Mensajes;
