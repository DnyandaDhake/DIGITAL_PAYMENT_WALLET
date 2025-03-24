import React, { useState } from 'react';
import '../styles/Profile.css';

const Profile = () => {
  const [name, setName] = useState(localStorage.getItem('name') || '');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [phone, setPhone] = useState(localStorage.getItem('phone') || '');
  const [country, setCountry] = useState(localStorage.getItem('country') || '');
  const [bankName, setBankName] = useState(localStorage.getItem('bankName') || '');
  const [password, setPassword] = useState('');

  const handleUpdateProfile = () => {
    // Save user details in local storage (frontend only)
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('country', country);
    localStorage.setItem('bankName', bankName);
    
    alert('Profile updated successfully (Frontend Only)');
  };

  return (
    <div className="profile-container">
      <h2>Edit Profile</h2>
      <input 
        type="text" 
        placeholder="Full Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="tel" 
        placeholder="Phone Number" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Country" 
        value={country} 
        onChange={(e) => setCountry(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Bank Name" 
        value={bankName} 
        onChange={(e) => setBankName(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="New Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleUpdateProfile}>Update</button>
    </div>
  );
};

export default Profile;
