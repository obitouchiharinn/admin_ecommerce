import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const [formData, setFormData] = useState({
    sellerId: '',
    phoneNumber: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    // Validate phone number format
    const phoneRegex = /^[0-9]{10}$/; // Assuming 10-digit phone number
    if (!phoneRegex.test(formData.phoneNumber)) {
      setErrorMessage('Invalid phone number format. Please enter a 10-digit phone number.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5001/admin/api/login', formData);
      setSuccessMessage(response.data.message);
      localStorage.setItem('sellerId', response.data.sellerId); // Store sellerId in localStorage

      // Navigate to the admin page after successful login
      navigate('/admin');
    } catch (error) {
      const errorData = error.response?.data || {};
      setErrorMessage(errorData.details || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Seller Login</h2>
        {errorMessage && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className="bg-green-100 text-green-700 p-3 rounded mb-4">
            {successMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="sellerId" className="block text-sm font-medium text-gray-700">Seller ID</label>
            <input
              id="sellerId"
              name="sellerId"
              type="text"
              placeholder="Enter your Seller ID"
              value={formData.sellerId}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              placeholder="Enter your Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account? <a href="/register" className="text-indigo-600 hover:underline">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
