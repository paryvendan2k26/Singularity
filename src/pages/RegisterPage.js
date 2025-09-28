// src/pages/RegisterPage.js

import React, { useState } from 'react';
import api from '../api'; // Correctly using our new api instance
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // CORRECTED: The URL is now shorter
      await api.post('/api/users/register', {
        username,
        email,
        password,
      });
      navigate('/login'); // Redirect to login page after successful registration
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-white pt-24">
      <form onSubmit={handleSubmit} className="p-8 rounded-lg shadow-lg w-full max-w-md glass-effect">
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-500"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-500"
            required
          />
        </div>
        <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;