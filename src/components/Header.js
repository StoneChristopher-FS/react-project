import React from 'react';

import AvatarIcon from '../images/profile-pic.jpg';

import {FaSearch} from 'react-icons/fa';
import {BsFillGearFill} from 'react-icons/bs';

const Header = props => {
    return (
        <header style={styles.header}>
            <div style={styles.left}>
                <h1 style={styles.title}>HouseHunter</h1>
            </div>
            <div style={styles.search}>
                <FaSearch />
                <input type="text" placeholder="Search" style={styles.searchBar}/>
            </div>
            <div style={styles.right}>
                <img src={AvatarIcon} alt="Christopher Stone" style={styles.img} />
                <p style={styles.name}>Christopher Stone</p>
                <BsFillGearFill style={styles.settings} />
            </div>
        </header>
    )
}

export default Header

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 20px',
        backgroundColor: '#003C52',
        color: '#F3E5CE',
        fontSize: '.90rem'
    },
    left: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: '2rem',
        padding: '0 5px',
        margin: '0'
     },
    search: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: '2',
        fontSize: '1.25rem',
        marginRight: '5px'
    },
    searchBar: {
        width: '70%',
        padding: '10px 5px',
        marginLeft: '5px',
        borderRadius: '5px',
        backgroundColor: '#F3E5CE',
        color: '#003C52'
    },
    right: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '2px'
    },
    img: {
        height: '45px',
        borderRadius: '5px'
    },
    name: {
        padding: '0 15px 0 5px',
        textAlign: 'center'
    },
    settings: {
        marginTop: '3px'
    }
}