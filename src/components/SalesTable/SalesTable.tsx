import React from 'react';
import { Props } from './interface';
import './styles.css';

const SalesTable: React.FC<Props> = ({ filteredData, tableTitle }) => {
  return (
    <div>
      <table>
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
