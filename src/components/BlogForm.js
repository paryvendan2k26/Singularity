// // src/components/BlogForm.js

// import React, { useState, useEffect } from 'react';

// const BlogForm = ({ onSubmit, initialData = { title: '', content: '' }, buttonText }) => {
//   const [title, setTitle] = useState(initialData.title);
//   const [content, setContent] = useState(initialData.content);

//   useEffect(() => {
//     setTitle(initialData.title);
//     setContent(initialData.content);
//   }, [initialData]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ title, content });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-8 rounded-lg shadow-lg w-full max-w-2xl mx-auto glass-effect">
//       <div className="mb-6">
//         <label htmlFor="title" className="block mb-2 text-lg font-semibold">Title</label>
//         <input
//           id="title"
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-500"
//           required
//         />
//       </div>
//       <div className="mb-6">
//         <label htmlFor="content" className="block mb-2 text-lg font-semibold">Content</label>
//         <textarea
//           id="content"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-500 h-60"
//           required
//         />
//       </div>
//       <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity">
//         {buttonText}
//       </button>
//     </form>
//   );
// };

// export default BlogForm;

// src/components/BlogForm.js

import React, { useState, useEffect } from 'react';

const BlogForm = ({ onSubmit, initialData = { title: '', content: '' }, buttonText }) => {
  const [title, setTitle] = useState(initialData.title);
  const [content, setContent] = useState(initialData.content);
  const [media, setMedia] = useState(null); // <-- Add this state

  // ... (useEffect stays the same)

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content, media }); // <-- Pass media file on submit
  };

  return (
    <form onSubmit={handleSubmit} className="...">
      {/* ... Title and Content fields are the same ... */}
      
      {/* --- ADD THIS NEW FIELD --- */}
      <div className="mb-6">
        <label htmlFor="media" className="block mb-2 text-lg font-semibold">Cover Image or Video</label>
        <input
          id="media"
          type="file"
          accept="image/*,video/*"
          onChange={(e) => setMedia(e.target.files[0])} // <-- Update media state
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100"
        />
      </div>

      <button type="submit" className="...">
        {buttonText}
      </button>
    </form>
  );
};

export default BlogForm;