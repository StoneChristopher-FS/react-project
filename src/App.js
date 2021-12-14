import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Income from './pages/Income';
import Spending from './pages/Spending';
import Savings from './pages/Savings';
import Settings from './pages/Settings';
import Nav from './components/Nav';
import PageHeader from './components/PageHeader';
import Avatar from './images/profile-pic.jpg';

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <Nav />
      </div>
      <div style={styles.right}>
        <PageHeader title="Wallet" profileImg={Avatar} name="Christopher Stone" />
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Reports' element={<Reports />} />
          <Route path='/Income' element={<Income />} />
          <Route path='/Spending' element={<Spending />} />
          <Route path='/Savings' element={<Savings />} />
          <Route path='/Settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

const styles = {
  container: {
    display: 'flex',
    backgroundColor: '#003C52'
  },
  left: {
    height: '100vh'
  },
  right: {
    width: '100%'
  }
}