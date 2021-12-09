import React from 'react';
import {MdDeleteForever, MdModeEditOutline} from 'react-icons/md';
import AvatarIcon from '../images/profile-pic.jpg';

const Post = props => {
    return (
        <section key={props.i} style={styles.container}>
            <div style={styles.top}>
                <div style={styles.left}>
                    <img src={AvatarIcon} alt="Christopher Stone" style={styles.logo}/>
                    <h1>{props.val.postTitle}</h1>
                </div>
                <div style={styles.right}>
                    <MdModeEditOutline style={styles.icon}/>
                    <MdDeleteForever onClick={props.delMe} style={styles.icon}/>
                </div>
            </div>
            <div style={styles.bottom}>
                <h3>{props.val.postDescription}</h3>
                <img src={props.val.postImage} alt={props.val.postAlt} style={styles.img} />
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
        width: '50%',
        cursor: 'pointer',
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