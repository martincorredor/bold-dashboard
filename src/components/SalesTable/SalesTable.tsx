import React, { useState, useEffect} from 'react';
import { Props } from './interface';
import './styles.css';

const SalesTable: React.FC<Props> = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [tableTitle, setTableTitle] = useState('Todas las transacciones');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilteredData(data)
  }, [data])
  

  const handleFilterChange = (filter: any) => {
    setSelectedFilter(filter);
    let newFilteredData;
    const now = Date.now();
    const today = new Date().setHours(0, 0, 0, 0);
    const weekAgo = today - 7 * 24 * 60 * 60 * 1000;
    const juneStart = new Date(new Date().getFullYear(), 7, 1).getTime();
    const juneEnd = new Date(
      new Date().getFullYear(),
      7,
      30,
      23,
      59,
      59
    ).getTime();

    switch (filter) {
      case 'today':
        setTableTitle('Transacciones de hoy');
        newFilteredData = data.filter((item) => item.createdAt >= today);
        break;
      case 'week':
        setTableTitle('Transacciones de esta semana');
        newFilteredData = data.filter((item) => item.createdAt >= weekAgo);
        break;
      case 'june':
        setTableTitle('Transacciones de Junio');
        newFilteredData = data.filter(
          (item) => item.createdAt >= juneStart && item.createdAt <= juneEnd
        );
        break;
      default:
        setTableTitle('Todas las transacciones');
        newFilteredData = data;
        break;
    }

    setFilteredData(newFilteredData);
  };

  const handleSearch = (e: any) => {
    const term = e.target.value;
    console.log(term)
    const newFilteredData = data.filter((item) => {
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(term.toLowerCase())
      );
    });
    setFilteredData(newFilteredData);
  };

  return (
    <div>
      <div>
        <button
          onClick={() => handleFilterChange('today')}
          style={{
            backgroundColor: selectedFilter === 'today' ? 'gray' : 'white',
          }}
        >
          Hoy
        </button>
        <button
          onClick={() => handleFilterChange('week')}
          style={{
            backgroundColor: selectedFilter === 'week' ? 'gray' : 'white',
          }}
        >
          Esta semana
        </button>
        <button
          onClick={() => handleFilterChange('june')}
          style={{
            backgroundColor: selectedFilter === 'june' ? 'gray' : 'white',
          }}
        >
          Junio
        </button>
      </div>
      <h1>{tableTitle}</h1>
      <table>
        <thead>
          <tr>
            <th>Transacción</th>
            <th>Fecha y hora</th>
            <th>Metodo de pago</th>
            <th>ID de la transacción Bold</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.transactionReference}</td>
              <td>{new Date(item.createdAt).toLocaleString()}</td>
              <td>{item.paymentMethod}</td>
              <td>{item.id}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
