import React from 'react';
import {Link} from 'react-router-dom';

const PageHeader = props => {
    return (
        <header style={styles.header}>
            <div>
                <h1 style={styles.title}>{props.title}</h1>
            </div>
            <div style={styles.right}>
                <Link to="/Settings" style={styles.link}><img src={props.profileImg} alt="Profile avatar" style={styles.img} /></Link>
                <p>{props.name}</p>
            </div>

        </header>
    )
}

export default PageHeader

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 0',
        backgroundColor: '#003C52',
        color: '#F3E5CE'
    },
    title: {
        margin: '0',
        paddingLeft: '10px'
    },
    right: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '10%',
        paddingRight: '10px'
    },
    link: {
        display: 'flex',
        alignItems: 'center'
    },
    img: {
        height: '45px',
        borderRadius: '25%'
    }
}