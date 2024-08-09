import React, { useState, useEffect } from 'react';
import './styles.css';
import { Props } from './interface';
import Tooltip from '../Tooltip/Tooltip';

const TotalSalesCard: React.FC<Props> = ({ selectedPeriod, amount, formattedDate }) => {
  const [totalSalesLabel, setTotalSalesLabel] =
    useState<string>('Total de ventas');

  const getPeriod = (selectedPeriod: string) => {
    switch (selectedPeriod) {
      case 'all':
        return 'Total de ventas';
      case 'today':
        return 'Total de ventas de hoy';
      case 'week':
        return 'Total de ventas de esta semana';
      case 'september':
        return 'Total de ventas de Septiembre';
      default:
        return 'Total de ventas';
    }
  };

  useEffect(() => {
    setTotalSalesLabel(getPeriod(selectedPeriod));
  }, [selectedPeriod]);

  return (
    <div className="card">
      <div className="card-title">
        <p>{totalSalesLabel}</p>
        <Tooltip
          type="info"
          text="El total de tus ventas en el periodo especificado"
        />
      </div>
      <div className="card-content">
        <h2 className="amount">{amount}</h2>
        <p className="date">{formattedDate}</p>
      </div>
    </div>
  );
};

export default TotalSalesCard;
