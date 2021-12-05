import React from 'react';

const MainNav = props => {
    return (
        <nav style={styles.mainNav}>
            <ul style={styles.list}>
                <li style={styles.item}>News Feed</li>
                <li style={styles.item}>Messages</li>
                <li style={styles.item}>Watch</li>
            </ul>
        </nav>
    )
}

export default MainNav

const styles = {
    mainNav: {
        backgroundColor: '#003C52',
        color: '#F3E5CE'
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