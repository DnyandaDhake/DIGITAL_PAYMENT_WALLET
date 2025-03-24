import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CreateOnlineAccount.css';

const CreateOnlineAccount = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    aadharCard: '',
    age: '',
    income: '',
    nationality: '',
    address: '',
  });


  const [accountId, setAccountId] = useState(null);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 
  const generateAccountId = () => {
    
    const uniqueId = `${formData.aadharCard}-${formData.dateOfBirth.replace(/-/g, '')}`;
    return uniqueId;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.dateOfBirth ||
      !formData.aadharCard ||
      !formData.age ||
      !formData.income ||
      !formData.nationality ||
      !formData.address
    ) {
      alert('Please fill in all fields.');
      return;
    }

   
    const newAccountId = generateAccountId();
    setAccountId(newAccountId);

    
    console.log('Form Data:', formData);
    console.log('Account ID:', newAccountId);

   
    alert('Account created successfully!');
  };

  return (
    <div className="create-online-account">
      <h2>Create Online Bank Account</h2>
      {accountId ? (
        <div className="account-created">
          <h3>Your account has been created successfully!</h3>
          <p>Your Account ID is: <strong>{accountId}</strong></p>
          <p>Please note this ID for future reference.</p>
          <button onClick={() => navigate('/')}>Go to Home</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Aadhar Card Number:</label>
            <input
              type="text"
              name="aadharCard"
              value={formData.aadharCard}
              onChange={handleChange}
              placeholder="Enter your Aadhar card number"
              required
            />
          </div>
          <div>
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              required
            />
          </div>
          <div>
            <label>Income:</label>
            <input
              type="number"
              name="income"
              value={formData.income}
              onChange={handleChange}
              placeholder="Enter your annual income"
              required
            />
          </div>
          <div>
            <label>Nationality:</label>
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              placeholder="Enter your nationality"
              required
            />
          </div>
          <div>
            <label>Address:</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              required
            />
          </div>
          <button type="submit">Create Account</button>
        </form>
      )}
    </div>
  );
};

export default CreateOnlineAccount;