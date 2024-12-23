import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    sellerId: '', // Added sellerId field
    phoneNumber: '',
    email: '',
    password: '',
    businessName: '',
    businessAddress: '',
    businessType: '',
  });

  // Handle input field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/admin/api/seller/signup', formData);
      alert(response.data.message); // Show success message
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.error || 'Registration failed'); // Show error message
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Register
        </h2>
        <input
          name="sellerId"
          placeholder="Seller ID"
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          name="businessName"
          placeholder="Business Name"
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          name="businessAddress"
          placeholder="Business Address"
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          name="businessType"
          placeholder="Business Type"
          onChange={handleChange}
          required
          className="w-full mb-6 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
