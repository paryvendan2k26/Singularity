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
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/blogs`);
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
        await axios.delete(`${process.env.REACT_APP_API_URL}/api/blogs/${blogId}`);
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
      
    // --- CHANGED: Added pt-24 (padding-top) to push content down below the navbar ---
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24 text-white">
      
      {/* --- UPDATED: Restructured header with centered button --- */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-heading">The Singularity Blogs</h1>
          
          {/* Show "Add New Blog" button only if user is logged in */}
          {user && (
            <div className="mt-6">
              <Link to="/create-blog" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block">
                + Add New Blog
              </Link>
            </div>
          )}
        </div>

      {/* --- CHANGED: This is now a responsive grid instead of a single column --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.length > 0 ? (
          // ... (the rest of the mapping code is correct and stays the same)
          blogs.map(blog => (
            <div key={blog._id} className="glass-effect p-6 rounded-lg flex flex-col">
              {/* The content of your blog card */}
               {blog.mediaUrl && (
                <div className="mb-4 rounded-lg overflow-hidden aspect-video">
                  {blog.mediaType === 'image' ? (
                    <img src={blog.mediaUrl} alt={blog.title} className="w-full h-full object-cover" />
                  ) : (
                    <video src={blog.mediaUrl} controls className="w-full h-full object-cover" />
                  )}
                </div>
              )}

              <div className="flex flex-col flex-grow">
                <h2 className="text-2xl font-bold mb-2 text-cyan-400">{blog.title}</h2>
                <p className="text-gray-400 text-sm mb-4">
                  By {blog.authorName} on {new Date(blog.createdAt).toLocaleDateString()}
                </p>
                
                <p className="text-gray-300 whitespace-pre-wrap mb-4 flex-grow">
                  {blog.content.substring(0, 150)}{blog.content.length > 150 && '...'}
                </p>

                {user && user.id === blog.authorId && (
                  <div className="flex items-center space-x-4 mt-auto">
                    <Link to={`/edit-blog/${blog._id}`} className="bg-yellow-500 text-black px-3 py-1 rounded font-semibold text-sm hover:bg-yellow-600">
                      Edit
                    </Link>
                    <button onClick={() => handleDelete(blog._id)} className="bg-red-500 text-white px-3 py-1 rounded font-semibold text-sm hover:bg-red-600">
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p>No blog posts yet. Be the first to create one!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogListPage;