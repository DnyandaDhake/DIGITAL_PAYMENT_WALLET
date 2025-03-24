import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BankTransfer.css';

const BankTransfer = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fromAccount: '',
    toAccount: '',
    recipientName: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle bank transfer
    alert('Bank transfer initiated successfully!');
    navigate('/transactions'); // Redirect to transaction history after transfer
  };

  return (
    <div className="bank-transfer">
      <h2>Bank Transfer</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fromAccount"
          placeholder="From Account Number"
          value={formData.fromAccount}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="toAccount"
          placeholder="To Account Number"
          value={formData.toAccount}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="recipientName"
          placeholder="Recipient Name"
          value={formData.recipientName}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
        <button type="submit">Transfer</button>
      </form>
    </div>
  );
};


export default BankTransfer;