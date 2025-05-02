const Blog = require("../models/blog");

// Create a new blog post
const createBlog = async (req, res) => {
  try {
    const { title, content, imageUrl, date, category } = req.body;

    console.log("Received blog data:", req.body);

    if (!title || !content || !imageUrl || !date || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Process date to exclude timestamp (set time to 00:00:00)

    const newBlog = new Blog({
      title,
      content,
      imageUrl,
      date,
      category,
    });

    const savedBlog = await newBlog.save();
    console.log("Saved blog document:", savedBlog);

    return res.status(201).json({ message: "Blog added successfully" });
  } catch (error) {
    console.error("Error saving blog:", error);
    return res.status(500).json({ message: "Error saving blog", error });
  }
};

// Fetch all blogs
const getAllBlogs = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit, 10);
    let query = Blog.find().sort({ createdAt: -1 }); // Newest first
    if (!isNaN(limit) && limit > 0) {
      query = query.limit(limit);
    }
    const blogs = await query;
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching blogs", error });
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
};
