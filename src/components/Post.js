import React from 'react';

import {MdDeleteForever, MdModeEditOutline} from 'react-icons/md';

import Logo from '../images/logo.jpg'
import Aerial from '../images/aerial.jpg'



const Post = props => {
    return (
        <section style={styles.container}>
            <div style={styles.top}>
                <div style={styles.left}>
                    <img src={Logo} alt="Profile logo" style={styles.logo}/>
                    <h1>Aerial Photography</h1>
                </div>
                <div style={styles.right}>
                    <MdModeEditOutline style={styles.icon}/>
                    <MdDeleteForever style={styles.icon}/>
                </div>
            </div>
            <div style={styles.bottom}>
                <h3>Beautiful photo over the Chesapeake Bay in Maryland</h3>
                <img src={Aerial} alt="Drone aerial over the Chesapeake Bay" style={styles.img} />
            </div>
        </section>
    )
}

export default Post

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#003c52',
        color: '#f3e5ce',
        marginTop: '50px'
    },
    top: {
        display: 'flex',
        justifyContent: 'space-between',
        height: '15%',
        width: '100%',
        fontSize: '1.1rem'
    },
    left: {
        display: 'flex',
        alignItems: 'center',
        width: '75%'
    },
    logo: {
        height: '65px',
        width: '65px',
        borderRadius: '25%',
        margin: '10px'
    },
    right: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '2rem'
    },
    icon: {
        margin: '0 15px',
        width: '50%'
    },
    bottom: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        margin: '10px',
        borderRadius: '5px',
        width: '90%'
    }
}