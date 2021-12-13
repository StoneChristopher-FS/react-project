import React from 'react';

function Dashboard() {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Dashboard</h2>
        </div>
    )
}

export default Dashboard

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