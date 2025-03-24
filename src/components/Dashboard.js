import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="dashboard-buttons">
        <button onClick={() => navigate('/dashboard/send-money')}>Send Money</button>
        <button onClick={() => navigate('/dashboard/bank-transfer')}>Bank Transfer</button>
        <button onClick={() => navigate('/dashboard/transaction-history')}>Transaction History</button>
        <button onClick={() => navigate('/dashboard/create-account')}>Create Online Account</button>
        <button onClick={() => navigate('/dashboard/profile')}>Profile</button>
        <button onClick={() => navigate('/dashboard/scan-qr')}>Scan QR Code</button>
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;