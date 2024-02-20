// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ filterTransactions }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    filterTransactions(searchTerm);
  };

  return (
    <div>
      <h2>Search Transactions</h2>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
