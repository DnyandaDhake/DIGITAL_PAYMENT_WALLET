import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Profile from './components/Profile';
import TransactionHistory from './components/TransactionHistory';
import SendMoney from './components/SendMoney';
import CreateOnlineAccount from './components/CreateOnlineAccount';
import BankTransfer from './components/BankTransfer';
import Login from './components/Login';
import Signup from './components/Signup'; // New component
import QRScanner from './components/QRScanner'; // Import QRScanner component
import './App.css';
import HomePage from './components/HomePage';
function App() {
  // State to manage authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // State to manage registered users (mock database)
  const [users, setUsers] = useState([]);

  // State to manage transactions
  const [transactions, setTransactions] = useState([]);

  // Function to add a new transaction
  const addTransaction = (type, amount, email) => {
    const newTransaction = {
      type,
      amount: parseFloat(amount),
      [type === 'send' ? 'to' : 'from']: email,
      date: new Date().toLocaleString(), // Record current date and time
    };
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
  };

  // Function to handle login
  const handleLogin = (username, password) => {
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      setIsLoggedIn(true);
      return true; // Login successful
    }
    return false; // Login failed
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Function to handle signup
  const handleSignup = (userData) => {
    setUsers((prevUsers) => [...prevUsers, userData]);
  };

  return (
    <Router>
      <div className="App">
        <NavMenu isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          {/* Login Route */}
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/" />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />

          {/* Signup Route */}
          <Route
            path="/signup"
            element={
              isLoggedIn ? (
                <Navigate to="/" />
              ) : (
                <Signup onSignup={handleSignup} />
              )
            }
          />

          {/* Protected Routes */}
          <Route
  path="/"
  element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />}
/>
          <Route
            path="/profile"
            element={
              isLoggedIn ? (
                <Profile />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/transactions"
            element={
              isLoggedIn ? (
                <TransactionHistory transactions={transactions} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/send"
            element={
              isLoggedIn ? (
                <SendMoney addTransaction={addTransaction} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/create-online-account"
            element={
              isLoggedIn ? (
                <CreateOnlineAccount />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/bank-transfer"
            element={
              isLoggedIn ? (
                <BankTransfer addTransaction={addTransaction} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          
          {/* QR Scanner Route */}
          <Route path="/qrscan" element={isLoggedIn ? <QRScanner /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
