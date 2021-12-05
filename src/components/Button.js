import React from 'react';

const Button = props => {
    return(
        <button style={styles.btnStyle}>
            {props.btnText}
        </button>
    )
}

export default Button

const styles = {
    btnStyle: {
        padding: '7px 40px',
        backgroundColor: '#F3E5CE',
        color: '#003C52',
        fontSize: '18px',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: 'inset 0 -0.6em 0 -0.35em #003C52',
        border: 'none',
        borderRadius: '5px'
    } 
}