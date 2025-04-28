const express = require("express");
const multer = require("multer");
const { uploadMedia } = require("../controllers/mediaController");

const router = express.Router(); // Make sure this is express.Router, NOT router package!

const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), uploadMedia);

module.exports = router;
