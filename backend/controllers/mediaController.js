const cloudinary = require("../config/cloudinary");
const Media = require("../models/media");

// POST: Add new media
const addNewMedia = async (req, res) => {
  try {
    const file = req.file;

    console.log("Uploaded file object:", file);

    const { title, category } = req.body; // Destructuring title and category

    if (!file) return res.status(400).json({ error: "No file selected" });
    if (!category)
      return res.status(400).json({ error: "Category is required" });
    if (!title) return res.status(400).json({ error: "Title is required" }); // Added check for title

    // Validate category against allowed enum values
    const allowedCategories = [
      "Events",
      "Training",
      "Messages",
      "Regional",
      "Leadership",
      "Worship",
      "Outreach",
      "Publications",
    ];
    if (!allowedCategories.includes(category)) {
      return res.status(400).json({ error: "Invalid category" });
    }

    // Use file.path or file.secure_url or file.url depending on availability
    const fileUrl = file.path || file.secure_url || file.url;
    if (!fileUrl) {
      return res
        .status(500)
        .json({ error: "Failed to get file URL from upload" });
    }

    const newMedia = new Media({
      title: title, // Storing the title in the database
      url: fileUrl,
      type: file.mimetype,
      category: category,
    });

    await newMedia.save();
    return res.status(201).json({
      message: "Media uploaded successfully",
      media: newMedia,
    });
  } catch (error) {
    const util = require("util");
    console.error(
      "Error in addNewMedia:",
      util.inspect(error, { depth: null })
    );
    res.status(500).json({ error: error.message || "Internal Server Error" });
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
