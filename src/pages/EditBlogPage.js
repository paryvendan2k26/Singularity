// src/pages/EditBlogPage.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api'; // Correctly using our new api instance
import BlogForm from '../components/BlogForm';

const EditBlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // CORRECTED: The URL is now shorter
        const response = await api.get(`/api/blogs/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Failed to fetch blog post:', error);
      }
    };
    fetchBlog();
  }, [id]);

  const handleUpdate = async (blogData) => {
    // We need to send as FormData to handle potential file uploads
    const formData = new FormData();
    formData.append('title', blogData.title);
    formData.append('content', blogData.content);
    if (blogData.media) {
      formData.append('media', blogData.media);
    }

    try {
      // CORRECTED: The URL is now shorter
      await api.put(`/api/blogs/${id}`, formData);
      navigate('/blogs');
    } catch (error) {
      console.error('Failed to update blog post:', error);
      alert('Failed to update post. Are you the author?');
    }
  };

  if (!blog) return <div className="text-white text-center py-10">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm-px-6 lg:px-8 py-12 pt-24 text-white">
      <h1 className="text-4xl font-bold font-heading mb-8 text-center">Edit Blog Post</h1>
      <BlogForm onSubmit={handleUpdate} initialData={blog} buttonText="Update Post" />
    </div>
  );
};

export default EditBlogPage;