// src/context/AuthContext.js

import React, { createContext, useState, useEffect } from 'react';
import api from '../api'; // Correctly using our new api instance

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(sessionStorage.getItem('token'));

  useEffect(() => {
    // Check if a token exists and fetch user data on initial load
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const storedUser = JSON.parse(sessionStorage.getItem('user'));
      if(storedUser) {
        setUser(storedUser);
      }
    }
  }, [token]);

  const login = async (email, password) => {
    try {
      // CORRECTED: The URL is now shorter
      const response = await api.post('/api/users/login', {
        email,
        password,
      });

      const { token, user } = response.data;
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('user', JSON.stringify(user));
      setToken(token);
      setUser(user);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      return response;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    setToken(null);
    setUser(null);
    delete api.defaults.headers.common['Authorization'];
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};