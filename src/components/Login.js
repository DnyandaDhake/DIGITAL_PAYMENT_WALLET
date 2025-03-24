import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  // State for login form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Call the onLogin function passed from App.js
    const loginSuccess = onLogin(username, password);

    if (loginSuccess) {
      alert('Login successful!');
      navigate('/'); // Redirect to home page after login
    } else {
      alert('Invalid username or password.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <span onClick={() => navigate('/signup')}>Sign up</span>.
      </p>
    </div>
  );
};

export default Login;
