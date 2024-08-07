import React, { useState } from 'react';
import './styles.css';
import { Props, filterButtonInterface } from './interface';

const DateFilterBar: React.FC<Props> = ({ handleDateFilter }) => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const filterButton: React.FC<filterButtonInterface> = ({ text, action }) => (
    <button
      className={`filterBtn ${selectedButton === text ? 'selected' : ''}`}
      onClick={() => {
        action();
        setSelectedButton(text);
      }}
    >
      {text}
    </button>
  );

  return (
    <div className="filter-container">
      {filterButton({ text: 'Hoy', action: handleDateFilter })}
      {filterButton({ text: 'Esta semana', action: handleDateFilter })}
      {filterButton({ text: 'Junio', action: handleDateFilter })}
    </div>
  );
};

export default DateFilterBar;
