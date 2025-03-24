import React from 'react';
import '../styles/TransactionHistory.css';

const TransactionHistory = ({ transactions }) => {
  return (
    <div className="transaction-history-container">
      <h2>Transaction History</h2>

      
      <ul className="transactions-list">
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.type === 'send' ? 'Sent' : 'Bank Transfer'} ${transaction.amount}{' '}
            {transaction.type === 'send' ? 'to' : 'to account'} {transaction.to || transaction.from} on{' '}
            {transaction.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;