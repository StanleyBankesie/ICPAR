const express = require("express");
const createBlog  = require("../controllers/blogController");

const router = express.Router();

router.post("/create/blog", createBlog);

module.exports = router;
