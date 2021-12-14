import React from 'react';

function Spending() {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Spending</h2>
        </div>
    )
}

export default Spending

const styles = {
    container: {
        height: '100vh',
        paddingLeft: '15px',
        backgroundColor: '#003C52',
        color: '#F3E5CE'
    },
    title: {
        margin: '0px',
        padding: '39px 0 0 15px'
    }
}