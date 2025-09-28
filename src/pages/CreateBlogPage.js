// src/pages/CreateBlogPage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BlogForm from '../components/BlogForm';

const CreateBlogPage = () => {
  const navigate = useNavigate();

  const handleCreate = async (blogData) => {
    const formData = new FormData();
    formData.append('title', blogData.title);
    formData.append('content', blogData.content);
    if (blogData.media) {
      formData.append('media', blogData.media);
    }

    try {
      // Axios will automatically set the correct headers for FormData
      await axios.post(`${process.env.REACT_APP_API_URL}/api/blogs`, formData);
      navigate('/blogs');
    } catch (error) {
      console.error('Failed to create blog post:', error);
      alert('Failed to create post. Are you logged in?');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white">
      <h1 className="text-4xl font-bold font-heading mb-8 text-center">Create a New Blog Post</h1>
      <BlogForm onSubmit={handleCreate} buttonText="Create Post" />
    </div>
  );
};

export default CreateBlogPage;