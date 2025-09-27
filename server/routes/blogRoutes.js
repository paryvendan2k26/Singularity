// server/routes/blogRoutes.js

const router = require('express').Router();
const Blog = require('../models/Blog');
const User = require('../models/User');
const auth = require('../middleware/auth');

// === GET ALL BLOGS (Public) ===
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }); // Newest first
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});


// === GET A SINGLE BLOG BY ID (Public) ===
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});


// === CREATE A NEW BLOG (Protected) ===
router.post('/', auth, async (req, res) => {
  try {
    const { title, content } = req.body;
    const user = await User.findById(req.user.id);

    const newBlog = new Blog({
      title,
      content,
      authorId: req.user.id,
      authorName: user.username
    });

    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// === DELETE A BLOG (Protected & Authorized) ===
router.delete('/:id', auth, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    // Authorization check: Make sure the user deleting the post is the author
    if (blog.authorId.toString() !== req.user.id) {
      return res.status(401).json({ message: 'User not authorized' });
    }

    await blog.deleteOne();
    res.json({ message: 'Blog removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// === UPDATE A BLOG (Protected & Authorized) ===
router.put('/:id', auth, async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        // Authorization check
        if (blog.authorId.toString() !== req.user.id) {
            return res.status(401).json({ message: 'User not authorized' });
        }

        blog.title = req.body.title || blog.title;
        blog.content = req.body.content || blog.content;

        const updatedBlog = await blog.save();
        res.json(updatedBlog);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});


module.exports = router;