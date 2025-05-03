const express = require("express");
const blogUpload = require("../middleware/upload.blog");
const { addNewBlog, fetchAllBlogs } = require("../controllers/blogs.controller");

const router = express.Router();

router.post("/create/blog", blogUpload.single("image"), addNewBlog);

router.get("/blogs", fetchAllBlogs);
module.exports = router;
