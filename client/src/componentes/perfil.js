import React from 'react';

const Perfil = () => {
    const styles = {
        container: {
            marginTop: '2.5%',
            marginLeft: '2.5%',
            backgroundColor: '#fafafa',
            width: '95%',
            height: '80%',
            borderRadius: '8px',
            border: '2px solid #f1f1f1',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
        },
        heading: {
            color: '#333',
            fontSize: '2rem',
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>HOLA</h1>
        </div>
    );
}
export default Perfil;