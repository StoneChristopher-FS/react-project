import React from 'react';
import {Link} from 'react-router-dom';
import {RiDashboardFill} from 'react-icons/ri';
import {HiDocumentReport} from 'react-icons/hi';
import {FaGoogleWallet, FaMoneyBillWave} from 'react-icons/fa';
import {MdSavings} from 'react-icons/md';
import {GiPayMoney} from 'react-icons/gi';

const Nav = () => {
    return (
        <nav style={styles.nav}>
            <span style={styles.icon}><FaGoogleWallet /></span>
            <Link to="/Dashboard" style={styles.link}><RiDashboardFill /></Link>
            <Link to="/Reports" style={styles.link}><HiDocumentReport /></Link>
            <Link to="/Income" style={styles.link}><FaMoneyBillWave /></Link>
            <Link to="/Savings" style={styles.link}><MdSavings /></Link>
            <Link to="/Spending" style={styles.link}><GiPayMoney /></Link>
        </nav>
    )
}

export default Nav

const styles = {
    nav: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: '#003C52'   
    },
    icon: {
        paddingTop: '9px',
        paddingBottom: '60px',
        color: '#F3E5CE',
        fontSize: '2rem'
    },
    link: {
        paddingBottom: '30px',
        fontSize: '1.25rem'
    }
}