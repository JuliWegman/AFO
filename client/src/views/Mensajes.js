import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chat from "../componentes/chat.js";
import '../css/mensajes.css';

const Mensajes = ({ setHamburguesa, usuario }) => {
    const [abierto, setAbierto] = useState(false);
    const [mensajes, setMensajes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const res2 = await axios.get(`/mensaje/${usuario.id_usuario}`);
                setMensajes(res2.data);
                setAbierto(true);
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener los mensajes:', error);
                setError('Error al obtener los mensajes.');
                setLoading(false);
            }
        }

        if (typeof setHamburguesa === 'function') {
            setHamburguesa(true);
        }

        getData();
    }, [usuario.id_usuario]);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;
    if (!abierto) return null;

    return (
        <div className='Mensajes'>
            <Chat />

            <div className='infoUser'>
                {mensajes.map((mensaje, index) => (
                    <div key={index} className='containerfotos2'>
                        <img src={mensaje.fotoUser} alt='Foto del usuario' />
                        <h4>{mensaje.contenido}</h4>
                        <h4>{mensaje.nombre} {mensaje.apellido}</h4>
                    </div>
                ))}
            </div>

            <div className='texto1'>
                <h2>Chat Reciente: </h2>
            </div>

            <div className='containerfotos'>
                {mensajes.map((mensaje, index) => (
                    <div key={index} className='foto1'>
                        <img src={mensaje.fotoUser} alt='Foto del usuario' />
                        <h4 className='mensajeE'>
                            {mensaje.contenido}
                        </h4>
                        <h4>{mensaje.nombre} {mensaje.apellido}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Mensajes;
