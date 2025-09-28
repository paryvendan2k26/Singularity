// server/models/Blog.js

const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  authorName: {
    type: String,
    required: true
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId, // This links the blog to a user
    ref: 'User', // The 'User' model we just created
    required: true
  },
  mediaUrl: {
    type: String,
  },
  mediaType: {
    type: String, // Will be 'image' or 'video'
  }
}, {
  timestamps: true // Automatically adds 'createdAt' and 'updatedAt' fields
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;