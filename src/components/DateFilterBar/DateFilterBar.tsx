import React, { useState } from 'react';
import './styles.css';
import { Props, filterButtonInterface } from './interface';

const DateFilterBar: React.FC<Props> = ({ selectedFilter, handleFilterChange }) => {
  const filterButton: React.FC<filterButtonInterface> = ({ text, filter }) => (
    <button
      className={`filterBtn ${selectedFilter === filter ? 'selected' : ''}`}
      onClick={() => handleFilterChange(filter)}
    >
      {text}
    </button>
  );

  return (
    <div className="filter-container">
      {filterButton({ text: 'Hoy', filter: 'today' })}
      {filterButton({ text: 'Esta semana', filter: 'week' })}
      {filterButton({ text: 'Septiembre', filter: 'september' })}
    </div>
  );
};

export default DateFilterBar;
