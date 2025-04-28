const express = require("express");
const mediaUpload = require("../middleware/upload");
const addNewMedia = require("../controllers/mediaController");
const router = express.Router();

router.post("/media/upload", mediaUpload.single("image"), addNewMedia);
// router.get("/media", getTemplates);

module.exports = router;
