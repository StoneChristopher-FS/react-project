import React from 'react';
import AreaCharts from '../components/charts/AreaCharts';
import PieCharts from '../components/charts/PieCharts';

function Dashboard() {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Dashboard</h2>
            <div style={styles.charts}>
                <PieCharts />
                <AreaCharts />
            </div>
        </div>
    )
}

export default Dashboard

const styles = {
    container: {
        height: '100vh',
        paddingLeft: '15px',
        backgroundColor: '#003C52',
        color: '#F3E5CE'
    },
    title: {
        margin: '0px',
        padding: '39px 0 0 15px'
    },
    charts: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '50px'
    }
}