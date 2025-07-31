const express = require("express");
const mediaUpload = require("../middleware/upload");
const { createMedia, getAllMedia } = require("../controllers/media.controller");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Middleware to handle upload errors
const uploadMiddleware = (req, res, next) => {
  mediaUpload.single("image")(req, res, (err) => {
    if (err) {
      console.error("Upload error:", err);
      console.error("Full error details:", err);
      return res.status(400).json({
        message: "Upload failed",
        error: err.message,
        details: err,
      });
    }
    next();
  });
};

// POST: Upload media with error handling and admin auth
router.post("/media/upload", authMiddleware, uploadMiddleware, createMedia);

// GET: Fetch all media
router.get("/media", getAllMedia);

module.exports = router;
