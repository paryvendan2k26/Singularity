// src/pages/SingleBlogPage.js

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api';
import { ArrowLeft } from 'lucide-react';

const SingleBlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); // Gets the blog ID from the URL

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await api.get(`/api/blogs/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Failed to fetch blog post:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) {
    return <div className="text-center text-white py-10 pt-24">Loading post...</div>;
  }

  if (!blog) {
    return <div className="text-center text-white py-10 pt-24">Blog post not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24 text-white">
      <div className="mb-8">
        <Link to="/blogs" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all blogs
        </Link>
      </div>

      <article>
        {blog.mediaUrl && (
          <div className="mb-8 rounded-lg overflow-hidden aspect-video">
            {blog.mediaType === 'image' ? (
              <img src={blog.mediaUrl} alt={blog.title} className="w-full h-full object-cover" />
            ) : (
              <video src={blog.mediaUrl} controls className="w-full h-full object-cover" />
            )}
          </div>
        )}

        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-cyan-400">{blog.title}</h1>
        <p className="text-gray-400 text-sm mb-6">
          By {blog.authorName} on {new Date(blog.createdAt).toLocaleDateString()}
        </p>

        <div className="prose prose-invert prose-lg max-w-none text-gray-300 whitespace-pre-wrap">
          {blog.content}
        </div>
      </article>
    </div>
  );
};

export default SingleBlogPage;