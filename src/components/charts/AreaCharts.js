import React from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

const data = [
    {
      name: '1991',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '1992',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '1993',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '1994',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '1995',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '1996',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: '1997',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

const AreaCharts = () => {
    return (
      <article style={styles.card}>
        <h3 style={styles.title}>Savings</h3>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </article>
    )
}

export default AreaCharts

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