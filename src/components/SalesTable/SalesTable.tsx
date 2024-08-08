import React, { useState } from 'react';
import { Props } from './interface';
import './styles.css';
import { formatToCurrency } from '../../utils/currencyUtils';

const STATUS = {
  SUCCESSFUL: 'SUCCESSFUL',
  REJECTED: 'REJECTED',
};

const FRANCHISE = {
  MASTERCARD: 'MASTERCARD',
  VISA: 'VISA',
};

const SalesTable: React.FC<Props> = ({ filteredData, tableTitle }) => {
  const getStatus = (status: string) => {
    return status === STATUS.SUCCESSFUL ? (
      <div className="sale-status-label">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-phone"
          viewBox="0 0 16 16"
        >
          <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
          <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
        </svg>
        <p>Cobro exitoso</p>
      </div>
    ) : status === STATUS.REJECTED ? (
      <div className="sale-status-label">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-link-45deg"
          viewBox="0 0 16 16"
        >
          <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
        </svg>
        <p>Cobro no realizado</p>
      </div>
    ) : (
      <></>
    );
  };

  const getCardIcon = (franchise: string) => {
    const mastercardIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="40"
        height="40"
        viewBox="0 0 48 48"
      >
        <path
          fill="#3F51B5"
          d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"
        ></path>
        <path
          fill="#FFC107"
          d="M30 14A10 10 0 1 0 30 34A10 10 0 1 0 30 14Z"
        ></path>
        <path
          fill="#FF3D00"
          d="M22.014,30c-0.464-0.617-0.863-1.284-1.176-2h5.325c0.278-0.636,0.496-1.304,0.637-2h-6.598C20.07,25.354,20,24.686,20,24h7c0-0.686-0.07-1.354-0.201-2h-6.598c0.142-0.696,0.359-1.364,0.637-2h5.325c-0.313-0.716-0.711-1.383-1.176-2h-2.973c0.437-0.58,0.93-1.122,1.481-1.595C21.747,14.909,19.481,14,17,14c-5.523,0-10,4.477-10,10s4.477,10,10,10c3.269,0,6.162-1.575,7.986-4H22.014z"
        ></path>
      </svg>
    );

    const visaIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="40"
        height="40"
        viewBox="0 0 48 48"
      >
        <path
          fill="#1565C0"
          d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"
        ></path>
        <path
          fill="#FFF"
          d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z"
        ></path>
        <path
          fill="#FFC107"
          d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,0-4.44,0-4.44,0S10.894,20.84,12.212,24.945z"
        ></path>
      </svg>
    );

    const cardIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="40"
        height="40"
        viewBox="0 0 48 48"
      >
        <path
          fill="#9C27B0"
          d="M45,36c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V12c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V36z"
        ></path>
        <path fill="#E1BEE7" d="M5 18H43V22H5z"></path>
        <path fill="#E1BEE7" d="M13 30H20V32H13z"></path>
      </svg>
    );
    switch (franchise) {
      case FRANCHISE.MASTERCARD:
        return <div className='cardIcon'>{mastercardIcon}</div>;
      case FRANCHISE.VISA:
        return <div className='cardIcon'>{visaIcon}</div>;
      default:
        return <div className='cardIcon'>{cardIcon}</div>;
    }
  };

  const getPaymentMethod = (item: any) => {
    return item.paymentMethod === 'CARD' ? (
      <div className='payment-label'>
        {getCardIcon(item.franchise)} <p>****{item.transactionReference}</p>
      </div>
    ) : (
      <p>{item.paymentMethod}</p>
    );
  };

  return (
    <div className="sales-table-container">
      <table id="sales">
        <thead>
          <tr>
            <th>Transacción</th>
            <th>Fecha y hora</th>
            <th>Método de pago</th>
            <th>ID de la transacción Bold</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td className='bold-label'>{getStatus(item.status)}</td>
              <td>{new Date(item.createdAt).toLocaleString()}</td>
              <td>{getPaymentMethod(item)}</td>
              <td>{item.id}</td>
              <td className='bold-label'>{formatToCurrency(item.amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
