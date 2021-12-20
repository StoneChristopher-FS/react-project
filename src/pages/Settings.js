import React from 'react';
import {useState, useEffect} from 'react';
import UserSettings from '../components/UserSettings';

function Settings() {
    const [userData, setuserData] = useState(null);

    useEffect(() => {
        async function fecthAPI() {
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            const [user] = data.results;

            console.log(user);
            setuserData(user);
        }
        fecthAPI();
    }, []);

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Settings</h2>
            <div style={styles.user}>
                {userData && <UserSettings
                    avatar={userData.picture.large}
                    username={userData.login.username}
                    password={userData.login.password}
                    firstName={userData.name.first}
                    lastName={userData.name.last}
                    street={userData.location.street.number + " " + userData.location.street.name}
                    city={userData.location.city}
                    state={userData.location.state}
                    zipcode={userData.location.postcode}
                    email={userData.email}
                    phone={userData.phone}
                    />}
            </div>
        </div>
    )
}

export default Settings

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        paddingLeft: '15px',
        backgroundColor: '#003C52',
        color: '#F3E5CE'
    },
    title: {
        margin: '0px',
        padding: '39px 0 0 15px'
    },
    user:{
        alignSelf: 'center',
        width: '75%',
        marginTop: '80px'
    }
}