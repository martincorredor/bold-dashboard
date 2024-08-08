import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import TotalSalesCard from './components/TotalSalesCard/TotalSalesCard';
import DateFilterBar from './components/DateFilterBar/DateFilterBar';
import SalesTable from './components/SalesTable/SalesTable';

function App() {
  const [data, setData] = useState<any[]>([]);
  console.log('DATA: ', data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://bold-fe-api.vercel.app/api');
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* <TotalSalesCard selectedPeriod="Junio" amount={394.561} /> */}
        {/* <DateFilterBar handleDateFilter={() => {}} /> */}
        <SalesTable data={data}/>
      </div>
    </div>
  );
}

export default App;
