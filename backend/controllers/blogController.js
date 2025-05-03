const blogsModel = require('../models/blogs.model.js')
const fs = require("fs");
const cloudinary = require("../config/cloudinary.js");
const createBlog = async (req, res) => {
   const { title, category } = req.body;
  try {
    if (!title || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }
 if (!req.file) {
   return res.status(400).json({ message: "Please image" });
 }

 // Upload the image to Cloudinary
 const result = await cloudinary.uploader.upload(req.file.path)

 if (!result || !result.secure_url) {
   return res
     .status(500)
     .json({ message: "Failed to upload image to Cloudinary" });
 }

    const newBlog = {
      title,
      category,
      imageUrl: result.secure_url,
    };
    console.log(newBlog)
  
   const success =  await blogsModel.create(newBlog)
   if(success){
   return res.status(201).json({ message: "Blog added successfully" });
   }
    
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
