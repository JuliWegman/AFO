import React from 'react';
import { Link } from 'react-router-dom';
import ChatUser from './chatUser.js';


const Chat = ({setIDperfil,mandar,mensajes,index,setIndex,id_usuario}) => {


    const styles = {
        chat: {
            display: 'flex',
            flexDirection: 'row',
            height: '80vh',
            width: '90%',
            marginLeft: '5%',
            marginTop: '2.5%',
            backgroundColor: '#fafafa',
            border: '2px solid #f1f1f1',
        },
        containeri: {
            flexDirection: 'column',
            alignItems:'center',
            flex: '0 0 20%',
            width: '2rem',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
        },
        containerd: {
            flex: '80% 0 0',
            backgroundColor: '#fafafa',
            textAlign: 'center',
        },
        separacion1: {
            display: 'flex', 
            flexDirection: 'row',
            alignItems: 'center',
            height: '50%',
            width: '100%',
            border: '1px solid rgba(0, 0, 0, 0.03)',
        },
        rect: {
            width: '45%',
            height: '25%',
            marginLeft: '20%',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            fontSize: '60%',
            textAlign: 'start',
        },
        botonR: {
            cursor: 'Pointer',
            width: '16%',
            height: '11%',
            backgroundColor: '#EC303D',
            borderColor: '#EC303D',
            borderWidth: 0,
            marginTop: '3%',
            borderRadius: '7px 7px 7px 7px',
            fontSize: '80%',
            
        },
        botonN: {
            cursor: 'Pointer',
            width: '100%',
            height: '100%',
            backgroundColor: '#F87C18',
            borderColor: '#F87C18',
            borderWidth: 0,
            borderRadius: '7px 7px 7px 7px',
            fontSize: '80%',


        },
        heading: {
            fontSize: '70%',
            color: '#333',
        },
        botonashe: {
            display: 'flex',
            cursor: 'Pointer',
            width: '16%',
            height: '11%',
            backgroundColor: '#F87C18',
            borderColor: '#F87C18',
            borderWidth: 0,
            borderRadius: '7px 7px 7px 7px',
            fontSize: '100%',
            marginLeft: '0.3%',
            marginTop: '3%',
            textAlign: 'center',
            alignItems: 'center',
        },
        contenedor: {
            display: 'flex', 
            flexDirection: 'row',
            alignItems: 'center',
            height: '100%',
            width: '90%',
            marginLeft: '5%',
        },
        texto: {
            cursor: 'default',
        },
        texto2: {
            cursor: 'default',
        },
        info: {
            marginTop: '1%',
            marginLeft: '18.4%',
        }
    };

    return (
        <div style={styles.chat}>
            <div style={styles.containeri}>
                <div className='conteinerChat2' onClick={()=>setIndex(null)}>
                    <h1>inicio</h1>
                </div>
                {mensajes && mensajes.map((mensaje, index) => (
                    <ChatUser mensaje={mensaje} index={index} setIndex={setIndex}/>
                ))}
            </div>
            <div style={styles.containerd}>
                {index==null
                ?
                <>
                    <h2>Mensaje nuevo de Julian Wegman</h2>

                    <div style={styles.contenedor}>
                            <button style ={styles.botonR} onClick={()=>{setIndex(0)}}>Enviar Mensaje</button>
                            <Link style={styles.botonashe} to='/perfil'><button style ={styles.botonN} onClick={()=>{setIDperfil(2)}}>Ver Perfil</button></Link>
                        <div style ={styles.rect}>
                            <div style={styles.info}>
                                <h1>Acerca de oficina en Olaya 1075</h1>
                            </div>
                        </div>
                    </div> 
                    </>
                :
                <div className='mensajes'>
                    <div className='chatsss'>
                    {mensajes[index].mensajes.map((chat) => (
                        <div className='chatx'>
                        {chat.id_enviador===id_usuario ? 
                        
                            <h1 className='chatEnviado'>{chat.contenido}</h1>
                        
                        :
                            <h1 className='chatRecibido'>{chat.contenido}</h1>

                        }
                        </div>
                    ))}
                    </div>
                    <div className='enviarMensaje'>
                        <input className='inputMensaje' placeholder='Mensaje...' id="inputsito"/>  
                        <button className='botonMensaje' onClick={()=>{mandar(document.getElementById("inputsito").value , mensajes[index].id_usuario); document.getElementById("inputsito").value=""}}>Enviar</button>
                    </div>
                </div>} 
                               
            </div>
            
        </div>
    );
};

export default Chat;
