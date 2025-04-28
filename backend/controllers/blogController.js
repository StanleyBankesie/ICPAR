const Blog = require("../models/Blog");

const createBlog = async (req, res) => {
  try {
    const { title, content, imageUrl } = req.body;

    const newBlog = new Blog({ title, content, imageUrl });
    await newBlog.save();

    res.status(201).json(newBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createBlog };
