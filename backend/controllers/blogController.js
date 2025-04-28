const Blog = require("../models/blog");

const createBlog = async (req, res) => {
 try {
  const {title, content, imageUrl} = req.body;
  if(!title || !content || !imageUrl){
    return res.status(402).json({message: "All fields are required"})
  }
  const newBlog = {
    title, content, imageUrl
  }
  await Blog.create(newBlog)
  return res.status(201).json({message: "Blog added"})
 }
 catch(error){
  res.status(502).json({message: "Internal server error"})
  console.log("Error message:", error.message)
 }
};

module.exports = createBlog;
