import React from 'react';
import './styles.css';
import { Props } from './interface';
import Tooltip from '../Tooltip/Tooltip';

const TotalSalesCard: React.FC<Props> = ({selectedPeriod, amount}) => {

  return (
    <div className='card'>
      <div className='card-title'>
        <p>Total de ventas de {selectedPeriod}</p>
        <Tooltip
          type="info"
          text="El total de tus ventas en el periodo especificado"
        />
      </div>
      <div className='card-content'>
        <h2 className='amount'>$ {amount}</h2>
        <p className='date'>Junio 2024</p>
      </div>
    </div>
  );
};

export default TotalSalesCard;
