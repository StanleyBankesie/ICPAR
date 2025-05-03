const express = require("express");
const mediaUpload = require("../middleware/upload");
const { createMedia, getAllMedia } = require("../controllers/media.controller");

const router = express.Router();

// Middleware to handle upload errors
const uploadMiddleware = (req, res, next) => {
  mediaUpload.single("image")(req, res, (err) => {
    if (err) {
      console.error("Upload error:", err);
      return res
        .status(400)
        .json({ message: "Upload failed", error: err.message });
    }
    next();
  });
};

// POST: Upload media with error handling
router.post("/media/upload", uploadMiddleware, createMedia);

// GET: Fetch all media
router.get("/media", getAllMedia);

module.exports = router;
