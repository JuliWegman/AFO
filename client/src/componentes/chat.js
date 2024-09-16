import React from 'react';
import { Link } from 'react-router-dom';


const Chat = () => {
    


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
            </div>
            <div style={styles.containerd}>
                <div style ={styles.separacion1}>
                        <div style={styles.contenedor}>
                                <button style ={styles.botonR}>Enviar Mensaje</button>
                                <Link style={styles.botonashe} to='/perfil'><button style ={styles.botonN}>Ver Perfil</button></Link>
                        <div style ={styles.rect}>
                            <div style={styles.info}>
                                    <h1>Acerca de oficina en Olaya 1075</h1>
                                </div>
                        </div>
                    </div> 
                </div>

            </div>
            
        </div>
    );
};

export default Chat;
