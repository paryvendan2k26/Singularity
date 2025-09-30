// server/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware - UPDATED CORS CONFIGURATION
const allowedOrigins = [
  'https://thesingularitylab.netlify.app',
  'http://localhost:3000',
  'http://localhost:5173'
];

app.use(cors({
  origin: '*', // Allow all origins temporarily to test
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Use Routes
app.use('/api/users', userRoutes);
app.use('/api/blogs', blogRoutes);

// --- NEW, MORE ROBUST WAY TO START THE SERVER ---
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully.');
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.error('!!! MongoDB connection error: !!!');
    console.error(error);
    process.exit(1);
  }
};

startServer();