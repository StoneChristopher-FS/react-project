import React from 'react';

const MainNav = props => {
    return (
        <nav style={styles.mainNav}>
            <ul style={styles.list}>
                <li style={styles.item}>{props.nav1}</li>
                <li style={styles.item}>{props.nav2}</li>
                <li style={styles.item}>{props.nav3}</li>
            </ul>
        </nav>
    )
}

export default MainNav
//Style everything in the nav here
const styles = {
    mainNav: {
        backgroundColor: '#003C52',
        color: '#F3E5CE',
        width: '20%',
    },
    list: {
        listStyle: 'none',
        paddingLeft: '10px'
    },
    item: {
        padding: '15px 0',
        cursor: 'pointer',
        fontSize: '1.2rem'
    }
}