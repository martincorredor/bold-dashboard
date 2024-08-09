import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import TotalSalesCard from './components/TotalSalesCard/TotalSalesCard';
import DateFilterBar from './components/DateFilterBar/DateFilterBar';
import SalesTable from './components/SalesTable/SalesTable';
import Filter from './components/Filter/Filter';
import SearchInput from './components/SearchInput/SearchInput';
import { formatToCurrency } from './utils/currencyUtils';
import CircularProgress from '@mui/material/CircularProgress';

function App() {
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState(data);
  const [tableTitle, setTableTitle] = useState('Todas tus ventas');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [formattedDate, setFormattedDate] = useState('');
  const [dataToTable, setDataToTable] = useState(filteredData);


  useEffect(() => {
    setDataToTable(filteredData)
  }, [filteredData])
  

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

  useEffect(() => {
    const formatDate = (filter: string) => {
      const today = new Date();
      const monthNames = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
      ];

      switch (filter) {
        case 'today':
          return `${today.getDate()} de ${
            monthNames[today.getMonth()]
          } ${today.getFullYear()}`;
        case 'week':
          return `${monthNames[today.getMonth()]}, ${today.getFullYear()}`;
        case 'june':
          return `Junio, ${today.getFullYear()}`;
        default:
          return '';
      }
    };

    setFormattedDate(formatDate(selectedFilter));
  }, [selectedFilter]);

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

  const applySalesTypeFilters = (filters: string[]) => {
    if (filters.includes('ALL')) {
      setDataToTable(filteredData);
      return;
    }

    let newFilteredData = filteredData;
    if (filters.includes('TERMINAL')) {
      newFilteredData = filteredData.filter(
        (item) => item.salesType === 'TERMINAL'
      );
    }
    if (filters.includes('PAYMENT_LINK')) {
      newFilteredData = filteredData.filter(
        (item) => item.salesType === 'PAYMENT_LINK'
      );
    }

    setDataToTable(newFilteredData);
  };

  const getTotalAmount = () => {
    return formatToCurrency(
      filteredData.reduce(
        (accumulator, current) => accumulator + (current.amount || 0),
        0
      )
    );
  };

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {data.length !== 0 ? (
          <>
            <div className="container">
              <div className="total-sales-card">
                <TotalSalesCard
                  selectedPeriod={selectedFilter}
                  amount={getTotalAmount()}
                  formattedDate={formattedDate}
                />
              </div>
              <div className="date-filter-bar">
                <DateFilterBar
                  selectedFilter={selectedFilter}
                  handleFilterChange={handleFilterChange}
                />
              </div>
              <div className="filter">
                <Filter applyFilters={applySalesTypeFilters} />
              </div>
            </div>
            <div className="table-container">
              <div className="table-title">
                <p>{tableTitle}</p>
              </div>
              <SearchInput
                searchTerm={searchTerm}
                handleSearch={handleSearch}
              />
              <SalesTable filteredData={dataToTable} tableTitle={tableTitle} />
            </div>
          </>
        ) : (
          <div className='loading-container'>
            <CircularProgress />
            <p>Espera un poco, estamos trabajando lo más rápido que podemos...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
