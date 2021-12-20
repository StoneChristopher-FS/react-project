import React from 'react';

const UserSettings = props => {
    return (
      <div style={styles.container}>
          <img src={props.avatar} alt="Profile Avatar" style={styles.img}/>
          <form>
            <div style={styles.inputRow}>
                <div style={styles.label}>
                    <label for="username">Username:</label>
                    <input type="text" value={props.username} placeholder="Username" id="username" style={styles.input} />
                </div>
                <div style={styles.label}>
                    <label for="password">Password:</label>
                    <input type="text" value={props.password} placeholder="Password" id="password" style={styles.input} />
                </div>
            </div>
            <div style={styles.inputRow}>
                <div style={styles.label}>
                    <label for="firstName">First Name:</label>
                    <input type="text" value={props.firstName} placeholder="First Name" id="firstName" style={styles.input} />
                </div>
                <div style={styles.label}>
                    <label for="lastName">Last Name:</label>
                    <input type="text" value={props.lastName} placeholder="Last Name" id="lastName" style={styles.input} />
                </div>
            </div>
            <div style={styles.inputRow}>
                <div style={styles.label}>
                    <label for="street">Street:</label>
                    <input type="text" value={props.street} placeholder="Street" id="street" style={styles.input} />
                </div>
                <div style={styles.label}>
                    <label for="city">City:</label>
                    <input type="text" value={props.city} placeholder="City" id="city" style={styles.input} />
                </div>
            </div>
            <div style={styles.inputRow}>
                <div style={styles.label}>
                    <label for="state">State:</label>
                    <input type="text" value={props.state} placeholder="State" id="state" style={styles.input} />
                </div>
                <div style={styles.label}>
                    <label for="zipcode">Zip Code:</label>
                    <input type="number" value={props.zipcode} placeholder="Zip Code" id="zipcode" style={styles.input} />
                </div>
            </div>
            <div style={styles.inputRow}>
                <div style={styles.label}>
                    <label for="email">Email:</label>
                    <input type="email" value={props.email} placeholder="Email" id="email" style={styles.input} />
                </div>
                <div style={styles.label}>
                    <label for="phone">Phone:</label>
                    <input type="tel" value={props.phone} placeholder="Phone" id="phone" style={styles.input} />
                </div>
            </div>
          </form>
      </div> 
    )
}

export default UserSettings

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    img: {
        height: '375px',
        borderRadius: '25%'
    },
    label: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 20px'
    },
    inputRow: {
        display: 'flex',
        margin: '10px 0',
        fontSize: '1.25rem'
    },
    input: {
        borderRadius: '5px',
        backgroundColor: '#F3E5CE',
        color: '#003C52',
        fontSize: '1.5rem'
    }
}