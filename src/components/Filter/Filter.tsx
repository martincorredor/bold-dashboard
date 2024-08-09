import React, { useState } from 'react';
import './styles.css';
import { Props } from './interface';
import RuleIcon from '@mui/icons-material/Rule';

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
        <RuleIcon/>
      </button>
      {dropdownOpen && (
        <div className="dropdown-menu">
          <label>
            <input
              type="checkbox"
              value="TERMINAL"
              checked={selectedFilters.includes('TERMINAL')}
              onChange={handleCheckboxChange}
            />
            Cobro con datáfono
          </label>
          <label>
            <input
              type="checkbox"
              value="PAYMENT_LINK"
              checked={selectedFilters.includes('PAYMENT_LINK')}
              onChange={handleCheckboxChange}
            />
            Cobro con link de pago
          </label>
          <label>
            <input
              type="checkbox"
              value="ALL"
              checked={selectedFilters.includes('ALL')}
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