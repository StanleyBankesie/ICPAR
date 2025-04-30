const express = require("express");
const mediaUpload = require("../middleware/upload");
const {
  addNewMedia,
  fetchAllMedia,
} = require("../controllers/mediaController");

const router = express.Router();

// POST: Upload media
router.post("/media/upload", mediaUpload.single("file"), addNewMedia);

// GET: Fetch all media
router.get("/media", fetchAllMedia);

module.exports = router;
