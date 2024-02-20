// App.js
import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch data from the local server (http://localhost:8001/transactions)
    fetch('http://localhost:8001/transactions')
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, { id: transactions.length + 1, ...newTransaction }]);
  };

  const filterTransactions = (searchTerm) => {
    // Implement logic to filter transactions based on the search term
    // Update the transactions state accordingly
  };

  return (
    <div>
      <h1>My Bank App</h1>
      <TransactionTable transactions={transactions} />
      <TransactionForm addTransaction={addTransaction} />
      <SearchBar filterTransactions={filterTransactions} />
    </div>
  );
};

export default App;
