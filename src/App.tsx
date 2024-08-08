import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import TotalSalesCard from './components/TotalSalesCard/TotalSalesCard';
import DateFilterBar from './components/DateFilterBar/DateFilterBar';
import SalesTable from './components/SalesTable/SalesTable';
import Filter from './components/Filter/Filter';
import SearchInput from './components/SearchInput/SearchInput';

function App() {
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState(data);
  const [tableTitle, setTableTitle] = useState('Todas tus ventas');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

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

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    let newFilteredData;
    const today = new Date().setHours(0, 0, 0, 0);
    const weekAgo = today - 7 * 24 * 60 * 60 * 1000;
    const juneStart = new Date(new Date().getFullYear(), 5, 1).getTime();
    const juneEnd = new Date(
      new Date().getFullYear(),
      5,
      30,
      23,
      59,
      59
    ).getTime();

    switch (filter) {
      case 'today':
        setTableTitle('Tus ventas de hoy');
        newFilteredData = data.filter((item) => item.createdAt >= today);
        break;
      case 'week':
        setTableTitle('Tus ventas de esta semana');
        newFilteredData = data.filter((item) => item.createdAt >= weekAgo);
        break;
      case 'june':
        setTableTitle('Tus ventas de Junio');
        newFilteredData = data.filter(
          (item) => item.createdAt >= juneStart && item.createdAt <= juneEnd
        );
        break;
      default:
        setTableTitle('Todas tus ventas');
        newFilteredData = data;
        break;
    }
    setFilteredData(newFilteredData);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const newFilteredData = data.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(term.toLowerCase())
      )
    );
    setFilteredData(newFilteredData);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <div className="container">
          <div className="total-sales-card">
            <TotalSalesCard selectedPeriod={selectedFilter} amount={394.561} />
          </div>
          <div className="date-filter-bar">
            <DateFilterBar
              selectedFilter={selectedFilter}
              handleFilterChange={handleFilterChange}
            />
          </div>
          <div className="filter">
            <Filter />
          </div>
        </div>
        <div className="table-container">
          <div className='table-title'><p>{tableTitle}</p></div>
          <SearchInput searchTerm={searchTerm} handleSearch={handleSearch} />
          <SalesTable filteredData={filteredData} tableTitle={tableTitle} />
        </div>
      </div>
    </div>
  );
}

export default App;
