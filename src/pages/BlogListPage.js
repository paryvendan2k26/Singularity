// src/pages/BlogListPage.js

import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const BlogListPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (blogId) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      try {
        await axios.delete(`http://localhost:5000/api/blogs/${blogId}`);
        // Update state to remove the deleted blog instantly
        setBlogs(blogs.filter(blog => blog._id !== blogId));
      } catch (error) {
        console.error('Failed to delete blog:', error);
        alert('You are not authorized to delete this post.');
      }
    }
  };

  if (loading) {
    return <div className="text-center text-white py-10">Loading blogs...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold font-heading">The Singularity Blogs</h1>
        {/* Show "Add New Blog" button only if user is logged in */}
        {user && (
          <Link to="/create-blog" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
            + Add New Blog
          </Link>
        )}
      </div>

      <div className="space-y-8">
        {blogs.length > 0 ? (
          blogs.map(blog => (
            <div key={blog._id} className="glass-effect p-6 rounded-lg">
              
              {/* --- ADD THIS BLOCK TO DISPLAY MEDIA --- */}
              {blog.mediaUrl && (
                <div className="mb-4 rounded-lg overflow-hidden">
                  {blog.mediaType === 'image' ? (
                    <img src={blog.mediaUrl} alt={blog.title} className="w-full h-auto object-cover" />
                  ) : (
                    <video src={blog.mediaUrl} controls className="w-full h-auto" />
                  )}
                </div>
              )}

              <h2 className="text-2xl font-bold mb-2 text-cyan-400">{blog.title}</h2>
              <p className="text-gray-400 text-sm mb-4">
                By {blog.authorName} on {new Date(blog.createdAt).toLocaleDateString()}
              </p>
              <p className="text-gray-300 whitespace-pre-wrap">{blog.content}</p>

              {/* ... (Edit/Delete buttons are the same) */}
            </div>
          ))
        ) : (
          <p>No blog posts yet. Be the first to create one!</p>
        )}
      </div>
    </div>
  );
};

export default BlogListPage;