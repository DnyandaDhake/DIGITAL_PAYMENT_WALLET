import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SendMoney.css';

const SendMoney = ({ addTransaction }) => {
  const navigate = useNavigate();
  const [recipientEmail, setRecipientEmail] = useState('');
  const [amount, setAmount] = useState('');

  const handleSendMoney = (e) => {
    e.preventDefault();

    if (!recipientEmail || !amount) {
      alert('Please fill in all fields.');
      return;
    }

    // Log the transaction
    addTransaction('send', amount, recipientEmail);

    // Clear the form and navigate to transaction history
    setRecipientEmail('');
    setAmount('');
    navigate('/transactions');
  };

  return (
    <div className="send-money">
      <h2>Send Money</h2>
      <form onSubmit={handleSendMoney}>
        <input
          type="email"
          placeholder="Recipient Email"
          value={recipientEmail}
          onChange={(e) => setRecipientEmail(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default SendMoney;