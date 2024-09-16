import React, { useState, useEffect } from 'react';
import Chat from "../componentes/chat.js";
import axios from 'axios';
import '../css/mensajes.css';

const Mensajes = ({ setHamburguesa, usuario }) => {
    const [abierto, setAbierto] = useState(false);
    const [mensajes, setMensajes] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                const res2 = await axios.get('/mensaje/' + usuario.id_usuario);
                setMensajes(res2.data);
                setAbierto(true);
            } catch (error) {
                console.error('Error al obtener los mensajes:', error);
            }
        }

        // Solo llamamos a setHamburguesa si es necesario
        if (typeof setHamburguesa === 'function') {
            setHamburguesa(true); // Asegúrate de pasar true solo una vez
        }

        getData();
        
        // Solo ejecutamos useEffect cuando cambie `usuario.id_usuario`
    }, [usuario.id_usuario]);

    if (!abierto) return null;

    return (
        <div className='Mensajes'>
            <Chat />
            
            <div className='infoUser'>
                <div className='containerfotos2'>
                    {mensajes[0] && (
                        <>
                            <img src={mensajes[0].fotoUser} alt='Foto user' />
                            <h4>{mensajes[0].contenido}</h4>
                            <h4>Julian Wegman</h4>
                        </>
                    )}
                </div>
            </div>

            <div className='texto1'>
                <h2>Chat Reciente: Julian Wegman</h2>
            </div>
            
            <div className='containerfotos'>
                <div className='foto1'>
                    {mensajes[0] && (
                        <>
                            <img src={mensajes[0].fotoUser} alt='Foto user' />
                            <h4 className='mensajeE'>
                                Hola Axel, te quería consultar si puedo enviar con mi equipo de trabajo 3 escritorios más. Saludos.
                            </h4>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Mensajes;
