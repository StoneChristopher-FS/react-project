import React from 'react';

function Settings() {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Settings</h2>
        </div>
    )
}

export default Settings

const styles = {
    container: {
        height: '100vh',
        paddingLeft: '15px',
        backgroundColor: '#003C52',
        color: '#F3E5CE'
    },
    title: {
        margin: '0px'
    }
}