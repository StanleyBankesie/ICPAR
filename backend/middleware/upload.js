const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary.js");
const multer = require('multer')
const mediaStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "uploads",
    allow_formats: ["jpg", "png", "jpeg"],
  },
});

const mediaUpload = multer({ mediaStorage });
module.exports = mediaUpload;
