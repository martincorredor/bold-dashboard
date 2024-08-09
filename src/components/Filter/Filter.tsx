import React, { useState } from 'react';
import './styles.css';
import { Props } from './interface';

const Filter: React.FC<Props> = ({ applyFilters }) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setSelectedFilters((prev) =>
      checked ? [...prev, value] : prev.filter((f) => f !== value)
    );
  };

  const handleApplyClick = () => {
    applyFilters(selectedFilters);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="filter-dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        <p>Filtrar</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-filter-right"
          viewBox="0 0 16 16"
        >
          <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5" />
        </svg>
      </button>
      {dropdownOpen && (
        <div className="dropdown-menu">
          <label>
            <input
              type="checkbox"
              value="TERMINAL"
              onChange={handleCheckboxChange}
            />
            Cobro con datáfono
          </label>
          <label>
            <input
              type="checkbox"
              value="PAYMENT_LINK"
              onChange={handleCheckboxChange}
            />
            Cobro con link de pago
          </label>
          <label>
            <input
              type="checkbox"
              value="ALL"
              onChange={handleCheckboxChange}
            />
            Ver todos
          </label>
          <button className="apply-button" onClick={handleApplyClick}>
            Aplicar
          </button>
        </div>
      )}
    </div>
  );
};

export default Filter;