import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import TotalSalesCard from './components/TotalSalesCard/TotalSalesCard';
import DateFilterBar from './components/DateFilterBar/DateFilterBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* <TotalSalesCard selectedPeriod="Junio" amount={394.561} /> */}
        <DateFilterBar handleDateFilter={() => {}} />
      </div>
    </div>
  );
}

export default App;
