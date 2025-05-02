const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary.js");
const multer = require("multer");
const mediaStorage = new CloudinaryStorage({
  cloudinary,
  params: (req, file) => {
    let resource_type = "image";
    if (file.mimetype.startsWith("video/")) {
      resource_type = "video";
    }
    return {
      folder: "uploads",
      resource_type: resource_type,
      allowed_formats: ["jpg", "png", "jpeg", "mp4", "mov", "avi", "mkv"],
    };
  },
});

const mediaUpload = multer({ storage: mediaStorage });
module.exports = mediaUpload;
