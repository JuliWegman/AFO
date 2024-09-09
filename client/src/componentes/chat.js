import React from 'react';

const Chat = () => {
    // Define your styles as a JavaScript object
    const styles = {
        chat: {
            display: 'flex',
            flexDirection: 'row',
            height: '50rem',
            width: '90%',
            marginLeft: '5%',
            backgroundColor: '#fafafa',
            border: '2px solid #f1f1f1',
        },
        containeri: {
            flex: '0 0 20%',
            width: '2rem',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
        },
        containerd: {
            flex: '0 0 80%',
            backgroundColor: '#fafafa',
            textAlign: 'center',
        },
        
        rect: {
            width: '35%',
            height: '10%',
            border: '1px solid rgba(0, 0, 0, 0.1)',
        },
        heading: {
            fontSize: '24px',
            color: '#333',
        },
    };

    return (
        <div style={styles.chat}>
            <div style={styles.containeri}></div>
            <div style={styles.containerd}>
                <div style ={styles.separacion1}>
                    <div style ={styles.rect}></div>
                </div>
                <div style ={styles.separacion2}>
                    <div style ={styles.rect}></div>
                </div>
                
            </div>
            
        </div>
    );
};

export default Chat;
