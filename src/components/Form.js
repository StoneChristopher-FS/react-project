import React from 'react';
import Button from './Button';
import Avatar from './Avatar';

const Form = props => {
    return (
        <form style={styles.form} onSubmit={props.addPost}>
            <input type="text" name="postTitle" value={props.postTitle} onChange={props.getInput} placeholder="Post Title..." style={styles.input} />
            <div style={styles.description}>
                <Avatar AvatarIcon={props.avatarIcon} AvatarAlt={props.avatarAlt} />
                <input type="text" name="postDescription" value={props.postDescription} onChange={props.getInput} placeholder="Post Description..." style={styles.textArea} />
                <Button btnText="Post" />
            </div>   
        </form>
    )
}

export default Form

const styles = {
    form: {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: 'red',
        backgroundColor: '#003C52',
        padding: '10px',
        width: '100%'
    },
    input: {
        width: '100%',
        height: '2rem',
        alignSelf: 'center',
        backgroundColor: '#F3E5CE',
        color: '#003C52',
        borderRadius: '5px'
    },
    description: {
        display: 'flex',
        marginTop: '20px',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textArea: {
        width: '70%',
        padding: '15px 0',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#F3E5CE',
        color: '#003C52'
    }
}