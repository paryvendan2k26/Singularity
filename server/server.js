// server/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: 'https://thesingularitylab.netlify.app',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/blogs', blogRoutes);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully.');
    
    // THE FIX IS HERE: Added '0.0.0.0'
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server is running on port: ${PORT}`);
    });

  } catch (error) {
    console.error('!!! MongoDB connection error: !!!', error);
    process.exit(1);
  }
};

startServer();