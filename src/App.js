import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Income from './pages/Income';
import Spending from './pages/Spending';
import Savings from './pages/Savings';
import Settings from './pages/Settings';

function App() {
  return (
    <div>
      <div>
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