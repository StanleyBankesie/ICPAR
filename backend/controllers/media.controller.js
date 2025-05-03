const mediaModel = require('../models/media.model.js')
const fs = require("fs");
const cloudinary = require("../config/cloudinary.js");
const createMedia = async (req, res) => {
   const { title, category } = req.body;
  try {
    if (!title || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }
 if (!req.file) {
   return res.status(400).json({ message: "Please select image" });
 }

 // Upload the image to Cloudinary
 const result = await cloudinary.uploader.upload(req.file.path)

 if (!result || !result.secure_url) {
   return res
     .status(500)
     .json({ message: "Failed to upload image to Cloudinary" });
 }

    const newMedia = {
      title,
      category,
      imageUrl: result.secure_url,
    };
    console.log(newMedia)
  
   const success =  await mediaModel.create(newMedia)
   if(success){
   return res.status(201).json({ message: "Media uploaded successfully" });
   }
    
  } catch (error) {
    console.error("Error saving media:", error);
    return res.status(500).json({ message: "Error saving media", error });
  }
};

// Fetch all blogs
const getAllMedia = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit, 10);
    let query = mediaModel.find().sort({ createdAt: -1 }); // Newest first
    if (!isNaN(limit) && limit > 0) {
      query = query.limit(limit);
    }
    const media = await query;
    res.status(200).json(media);
  } catch (error) {
    res.status(500).json({ message: "Error fetching media", error });
  }
};

module.exports = {
  createMedia,
  getAllMedia,
};
