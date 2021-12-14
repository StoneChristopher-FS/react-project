import React from 'react';

function Income() {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Income</h2>
        </div>
    )
}

export default Income

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