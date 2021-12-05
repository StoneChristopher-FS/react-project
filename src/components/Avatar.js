import React from 'react';

const Avatar = props => {
    return (
        <img src={props.AvatarIcon} alt={props.AvatarAlt} style={styles.myAvatar} />
    )
}

export default Avatar

const styles = {
    myAvatar: {
        height: '65px',
        borderRadius: '25%'
    }
}