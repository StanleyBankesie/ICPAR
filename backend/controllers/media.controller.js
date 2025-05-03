const mediaModel = require("../models/media.model.js");

const createMedia = async (req, res) => {
  const { title, category } = req.body;
  try {
    if (!title || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (!req.file) {
      return res.status(400).json({ message: "Please select a media file" });
    }

    // Determine resource type based on file mimetype
    const resourceType = req.file.mimetype.startsWith("video/")
      ? "video"
      : "image";

    // Use the uploaded file info from multer-storage-cloudinary
    const mediaUrl = req.file.path;

    if (!mediaUrl) {
      return res
        .status(500)
        .json({ message: "Failed to get media URL from upload" });
    }

    const newMedia = {
      title,
      category,
      type: resourceType,
      url: mediaUrl,
    };
    console.log(newMedia);

    const success = await mediaModel.create(newMedia);
    if (success) {
      return res.status(201).json({ message: "Media uploaded successfully" });
    } else {
      return res.status(500).json({ message: "Failed to save media" });
    }
  } catch (error) {
    console.error("Error saving media:", error);
    return res
      .status(500)
      .json({ message: "Error saving media", error: error.message });
  }
};

// Fetch all media
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
