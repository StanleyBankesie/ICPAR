const cloudinary = require("../config/cloudinary");
const blogsModel = require("../models/blogs.model");

const addNewBlog = async (req, res) => {
  const { title, content, datePublished, category } = req.body;
  if (!title || !content || !datePublished || !category) {
    return res.status(400).json({ message: "All fields are required" });
  }
  if (!req.file) {
    return res.status(400).json({ message: "Please upload an image" });
  }

  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    if (!result.secure_url) {
      return res.status(500).json({ message: "Cloudinary upload failed" });
    }

    const newBlog = {
      title,
      content,
      category,
      datePublished: new Date(datePublished),
      imageUrl: result.secure_url,
      userId: req.user.id, // Append authenticated user ID
    };

    const created = await blogsModel.create(newBlog);
    return res.status(201).json({
      message: "Blog created successfully",
      blog: created,
    });
  } catch (err) {
    console.error("Error saving blog:", err);
    return res.status(500).json({ message: "Error saving blog", error: err });
  }
};

const fetchAllBlogs = async (req, res) => {
  try {
    const media = await blogsModel.find().sort({ createdAt: -1 });
    res.status(200).json(media);
  } catch (error) {
    console.error("Error fetching media:", error);
    res.status(500).json({ error: "Failed to fetch media" });
  }
};

module.exports = { addNewBlog, fetchAllBlogs };
