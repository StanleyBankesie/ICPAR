const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary.js");

const storage = new CloudinaryStorage({
  cloudinary,
  params: (req, file) => {
    const isVideo = file.mimetype.startsWith("video/");
    return {
      folder: "uploads",
      resource_type: isVideo ? "video" : "image",
      allowed_formats: ["jpg", "png", "jpeg", "mp4", "mov", "avi", "mkv"],
    };
  },
});

const mediaUpload = multer({
  storage, // 50MB file size limit
});

module.exports = mediaUpload;
