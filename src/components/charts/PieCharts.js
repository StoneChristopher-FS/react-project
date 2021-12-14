import React from 'react';
import {PieChart, Pie, Tooltip} from 'recharts';

const data01 = [
  { name: 'Medical', value: 400 },
  { name: 'Crypto', value: 300 },
  { name: 'Transport', value: 300 },
  { name: 'Tech', value: 200 },
];
const data02 = [
  { name: 'Sage Therapeutics Inc.', value: 100 },
  { name: 'Bio-Rad Laboratories Inc.', value: 300 },
  { name: 'Bitcoin', value: 100 },
  { name: 'Etherium', value: 80 },
  { name: 'Safemoon', value: 40 },
  { name: 'Shib', value: 30 },
  { name: 'Dogecoin', value: 50 },
  { name: 'FedEx', value: 100 },
  { name: 'Cryoport Inc', value: 200 },
  { name: 'Nvidia', value: 150 },
  { name: 'Spotify Technology', value: 50 },
];

const PieCharts = () => {
    return (
      <article style={styles.card}>
        <h3 style={styles.title}>Stock/Crypto Shares</h3>
        <PieChart width={400} height={400}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
          <Tooltip />
        </PieChart>
      </article>
    )
}

export default PieCharts

const styles = {
  card: {
    padding: '20px',
    backgroundColor: 'rgba(256, 256, 256, 1)',
    borderRadius: '10%',
    boxShadow: '10px 5px 5px rgba(0, 0, 0, .5)'
  },
  title: {
    color: 'black'
  }
}