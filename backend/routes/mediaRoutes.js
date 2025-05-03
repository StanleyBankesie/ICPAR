const express = require("express");
const mediaUpload = require("../middleware/upload");
const { createMedia, getAllMedia } = require("../controllers/media.Controller");


const router = express.Router();

// POST: Upload media
router.post("/media/upload", mediaUpload.single("image"), createMedia);

// GET: Fetch all media
router.get("/media", getAllMedia);

module.exports = router;
