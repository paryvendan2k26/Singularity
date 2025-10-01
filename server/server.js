// server/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// // Middleware - Secure CORS Configuration
// const allowedOrigins = [
//   'https://thesingularitylab.netlify.app',
//   'http://localhost:3000'
// ];

app.use(cors({
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(cors(corsOptions));
app.use(express.json());

// Use Routes
app.use('/api/users', userRoutes);
app.use('/api/blogs', blogRoutes);

// --- Robust Server Startup Logic ---
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully.');
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.error('!!! MongoDB connection error: !!!');
    console.error(error);
    process.exit(1); // Exit the process with a failure code
  }
};

startServer();