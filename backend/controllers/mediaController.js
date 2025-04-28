const cloudinary = require("../config/cloudinary");
const Media = require("../models/Media");
const fs = require("fs");

const uploadMedia = async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ error: "No file uploaded" });

    const result = await cloudinary.uploader.upload(file.path, {
      resource_type: "auto",
    });

    const newMedia = new Media({
      url: result.secure_url,
      type: result.resource_type,
      title: req.body.title,
    });

    await newMedia.save();
    fs.unlinkSync(file.path); // Delete the temp file

    res.status(200).json(newMedia);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { uploadMedia };
