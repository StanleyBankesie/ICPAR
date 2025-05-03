const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary.js");
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "uploads",
    allowed_formats: ["jpg", "png", "jpeg", "mp4", "mov", "avi", "mkv"],
  },
});

const mediaUpload = multer({ storage });
module.exports = mediaUpload;

