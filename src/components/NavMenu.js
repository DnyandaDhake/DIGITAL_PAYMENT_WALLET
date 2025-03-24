import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavMenu.css';


const NavMenu = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className="nav-menu">
      <div className="nav-links">
        {isLoggedIn ? (
          <>
            <Link to="/">Home</Link>
            <Link to="/send">Send Money</Link>
            <Link to="/bank-transfer">Bank Transfer</Link>
            <Link to="/transactions">Transactions</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/create-online-account">Create Account</Link>
            <Link to="/qrscan">QR Scanner</Link> {/* QR Scanner Link */}
            <button className="logout-btn" onClick={onLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default NavMenu;
