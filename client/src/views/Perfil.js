import React,{useState,useEffect} from 'react';
import Perfil from '../componentes/perfil.js';

const MiPerfil = ({setHamburguesa}) => {

    useEffect(()=>{
        setHamburguesa()
    },[])
    
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center', 
            alignItems: 'center', 
            flexDirection: 'column',
            marginTop: '2.5%',
            marginLeft: '2.5%',
            backgroundColor: '#fafafa',
            width: '95%',
            height: '80vh',
            borderRadius: '8px',
            border: '2px solid #f1f1f1',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
        },
        rect: {
            height: '40%',
            width: '0.1%',
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
            alignItems: 'center',
            
        },
        lineaH:{
            height: '1%',
            wiidth: '20%',
            backgroundColor: 'rgba(0, 0, 0, 0.25)',

        },
        heading: {
            color: '#333',
            fontSize: '2rem',
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.lineaH}></div>
            <div style={styles.rect}></div>
        </div>
    );

}

export default MiPerfil;