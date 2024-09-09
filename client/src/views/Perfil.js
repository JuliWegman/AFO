import React, { useEffect } from 'react';

const MiPerfil = ({ setHamburguesa }) => {

    useEffect(() => {
        setHamburguesa();
    }, []);

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
            border: '3px solid rgba(0, 0, 0, 0.05)',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
        },
        rect: {
            height: '40%',
            width: '0.1%',
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
            alignItems: 'center',
        },
        lineaH: {
            height: '0.3%',
            width: '7%', 
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
            margin: '0 auto', 
        },
        heading: {
            color: 'rgba(0, 0, 0, 0.5)',
            fontSize: '100%',
            textAlign: 'center',
            margin: '1rem 0',
            fontWeight: 'normal',
        },
        parteArriba: {
            marginBottom: '5%',
            textAlign: 'center',
            width: '100%',
        },
    };

    return (
        
        <div style={styles.container}>
            <div style={styles.parteArriba}>
                <div style={styles.lineaH}></div>
                <p style={styles.heading}>Se unió a AFO el 26/06/2011</p>
            </div>
            <div style={styles.rect}></div>
        </div>
    );
}

export default MiPerfil;
