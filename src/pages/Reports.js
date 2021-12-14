import React from 'react';

function Reports() {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Reports</h2>
        </div>
    )
}

export default Reports

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