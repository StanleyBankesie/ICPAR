const cloudinary = require("../config/cloudinary");
const Media = require("../models/media");

// POST: Add new media
const addNewMedia = async (req, res) => {
  try {
    const file = req.file;
    const { title, category } = req.body; // Destructuring title and category

    if (!file) return res.status(400).json({ error: "No file selected" });
    if (!category)
      return res.status(400).json({ error: "Category is required" });
    if (!title) return res.status(400).json({ error: "Title is required" }); // Added check for title

    const newMedia = new Media({
      title: title, // Storing the title in the database
      url: file.path || file.secure_url || file.url,
      type: file.mimetype || file.resource_type,
      category: category,
    });

    await newMedia.save();
    return res.status(201).json({
      message: "Media uploaded successfully",
      media: newMedia,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// GET: Fetch all media
const fetchAllMedia = async (req, res) => {
  try {
    const media = await Media.find().sort({ createdAt: -1 });
    res.status(200).json(media);
  } catch (error) {
    console.error("Error fetching media:", error);
    res.status(500).json({ error: "Failed to fetch media" });
  }
};

module.exports = {
  addNewMedia,
  fetchAllMedia,
};
