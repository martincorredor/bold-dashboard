import React from 'react';
import Drawer from '@mui/material/Drawer';
import { Props } from './interface';
import './styles.css';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { formatToCurrency } from '../../utils/currencyUtils';
import { dividerClasses } from '@mui/material';

const STATUS = {
  SUCCESSFUL: 'SUCCESSFUL',
  REJECTED: 'REJECTED',
};

const FRANCHISE = {
  MASTERCARD: 'MASTERCARD',
  VISA: 'VISA',
};

const SALES_TYPE = {
  PAYMENT_LINK: 'PAYMENT_LINK',
  TERMINAL: 'TERMINAL',
};

const CustomDrawer: React.FC<Props> = ({ open, handleOpen, selectedSale }) => {
  const getStatusLabel = (item: any) => {
    return item.status === STATUS.SUCCESSFUL ? (
      <div className="sale-status-container">
        <CheckCircleIcon className="check-icon" />
        <p>¡Cobro exitoso!</p>
      </div>
    ) : (
      <div className="sale-status-container">
        <CancelIcon className="cancel-icon" />
        <p>Cobro no realizado</p>
      </div>
    );
  };
  const getSalesTypeIcon = (type: string) => {
    const paymentIcon = <InsertLinkIcon className="custom-icon" />;
    const dataphoneIcon = <PhoneAndroidIcon className="custom-icon" />;

    return type === SALES_TYPE.PAYMENT_LINK ? paymentIcon : dataphoneIcon;
  };

  const getSaleType = (item: any) => {
    return item.salesType === SALES_TYPE.PAYMENT_LINK ? (
      <div className="sale-type-label">
        {getSalesTypeIcon(item.salesType)}
        {'Link de pagos'}
      </div>
    ) : (
      <div className="sale-type-label">
        {getSalesTypeIcon(item.salesType)}
        {'Datáfono'}
      </div>
    );
  };

  const getCardIcon = (franchise: string) => {
    const mastercardIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="1rem"
        height="1rem"
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
        width="1rem"
        height="1rem"
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
        width="1rem"
        height="1rem"
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
        return <div className="cardIcon">{mastercardIcon}</div>;
      case FRANCHISE.VISA:
        return <div className="cardIcon">{visaIcon}</div>;
      default:
        return <div className="cardIcon">{cardIcon}</div>;
    }
  };

  const getPaymentMethod = (item: any) => {
    return item.paymentMethod === 'CARD' ? (
      <div className="drawer-payment-label">
        {getCardIcon(item.franchise)} <p>****{item.transactionReference}</p>
      </div>
    ) : (
      <p>{item.paymentMethod}</p>
    );
  };

  return (
    selectedSale && (
      <Drawer open={open} onClose={() => handleOpen(false)} anchor="right">
        <div className="drawer-content">
          <CloseIcon
            className="drawer-close"
            onClick={() => handleOpen(false)}
          />
          <div className="sale-description">
            <div className="section-one">
              {getStatusLabel(selectedSale)}
              <h2>{formatToCurrency(selectedSale.amount)}</h2>
              <p>{new Date(selectedSale.createdAt).toLocaleString()}</p>
            </div>
            <div className="section-two">
              <div className="item-colums">
                <p>ID transacción Bold</p>
                <p className='drawer-saleId'>{selectedSale.id}</p>
              </div>
              <div className="item-colums">
                <p>Deducción Bold</p>
                <p className='drawer-deduction-number'>- $ 3.000</p>
              </div>
              <div className="payment-content">
                <div className="item-colums">
                  <p>Método de pago</p>
                  <p>{getPaymentMethod(selectedSale)}</p>
                </div>
                <div className="item-colums">
                  <p>Tipo de pago</p>
                  {getSaleType(selectedSale)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    )
  );
};

export default CustomDrawer;
