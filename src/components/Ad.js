import React from 'react';

const Ad = props => {
    return (
        <article style={styles.ad}>
            <img src={props.adImg} alt="Home for Sale" style={styles.pic}/>
            <h3 style={styles.text}>{props.adTitle}</h3>
            <h4 style={styles.text}>{props.adDescription}</h4>
        </article>
    )
}

export default Ad

const styles = {
    ad: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '20px',
        width: '300px',
        backgroundColor: '#F3E5CE',
        color: '#003C52',
        textAlign: 'center',
        cursor: 'pointer',
        borderRadius: '5px'
    },
    pic: {
        height: '200px',
        borderRadius: '5px',
        marginTop: '10px'
    },
    text: {
        marginTop: '10px'
    }
}