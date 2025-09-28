// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Intercept responses to check for authentication errors
api.interceptors.response.use(
  (response) => response, // Directly return a successful response
  (error) => {
    // If the error is a 401 Unauthorized
    if (error.response && error.response.status === 401) {
      // Remove the token and user from session storage
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
      // Redirect to the login page
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;