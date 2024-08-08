import React from 'react';
import { Props } from './interface';
import './styles.css';


const SearchInput: React.FC<Props> = ({ searchTerm, handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Buscar..."
      value={searchTerm}
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
};

export default SearchInput;
