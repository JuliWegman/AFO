import React, { useEffect,useState } from 'react';
import axios from 'axios';
const MiPerfil = ({ setHamburguesa ,idUsuario}) => {
    const [Usuario,setUsuario]=useState("")

    useEffect(() => {
        async function getData(){
            const res=await axios.get('/usuario/'+idUsuario)
            setUsuario(res.data)
        }

        getData()
        setHamburguesa();
    }, []);

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center', 
            alignItems: 'center', 
            flexDirection: 'column',
            marginTop: '7.5%',
            marginLeft: '15%',
            backgroundColor: '#fafafa',
            width: '70%',
            height: '60vh',
            borderRadius: '8px',
            border: '3px solid rgba(0, 0, 0, 0.05)',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', 
        },
        rect: {
            height: '90%',
            width: '0.2%',
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
            alignItems: 'center',
        },
        todo:{
            display:'flex',
            justifyContent: 'space-evenly', 
            alignItems: 'center', 
            flexDirection: 'row',
            height: '90%',
            width:'100%',

        },
        foto:{
            width:'20%',
            height:'55%',
            borderRadius:'100%',
        },
        info:{
            width:'45%',
            display:'flex',
            flexDirection:'column',
            justifyContent: 'space-evenly', 
            height:'70%'

        },
        nombre:{
            fontSize:'5em',
        }
    };

    return (
        <>
        <div style={styles.container}>
            
            <div style={styles.todo}>
                <img src={Usuario.foto} style={styles.foto} alt='Foto'/>
                <div style={styles.rect}></div>
                <div style={styles.info}>
                    <h1 style={styles.nombre}>{Usuario.nombre} {Usuario.apellido}</h1>
                    <h2>mail: {Usuario.mail}</h2>
                    <h2>telefono: {Usuario.telefono}</h2>
                </div>
            </div>
        </div>
        </>
    );
}

export default MiPerfil;
