const express = require("express");
const { createBlog, getAllBlogs } = require("../controllers/blogController");
const mediaUpload = require("../middleware/upload");

const router = express.Router();

router.post("/create/blog", mediaUpload.single("image"), createBlog);

// router.get("/blog", getAllBlogs);

// API route to fetch all blogs
router.get("/blogs", getAllBlogs);

module.exports = router;
