const express = require("express");
const blogUpload = require("../middleware/upload.blog");
const {
  addNewBlog,
  fetchAllBlogs,
} = require("../controllers/blogs.controller");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/create/blog",
  authMiddleware,
  blogUpload.single("image"),
  addNewBlog
);

router.get("/blogs", fetchAllBlogs);
module.exports = router;
