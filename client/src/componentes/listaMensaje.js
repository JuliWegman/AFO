import React, { useEffect,useState } from 'react';

const listaMensaje = () => {

    const styles = {
        containeri: {
            height: '80vh',
            flexDirection: 'column',
            flex: '0 0 20%',
            width: '2rem',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
        },
    }

    return(
        <><div style={styles.containeri}></div></>
    );
};

export default listaMensaje;