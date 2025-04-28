const cloudinary = require("../config/cloudinary");
const Media = require("../models/media");
const fs = require("fs");

const addNewMedia = async (req, res) => {
  try {
    const {title, description} = req.body;
    const file = req.file;
    if (!file) return res.status(400).json({ error: "No file selected" });

    const result = await cloudinary.uploader.upload(file.path, {
      resource_type: "auto",
    });
    const newMedia = new Media({
      url: result.secure_url,
      type: result.resource_type,
      title,
      description
    });
    fs.unlinkSync(file.path); 
    await Media.create(newMedia).save();
    return res.status(201).json({message: "Media uploaded successfully"})
   
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = addNewMedia
