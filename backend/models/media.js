const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema(
  {
    title: {
      // New field for the title
      type: String,
      required: true, // Title is required
    },
    type: {
      type: String,
    },
    url: {
      type: String,
    },
    category: {
      type: String,
      enum: [
        "Events",
        "Training",
        "Messages",
        "Regional",
        "Leadership",
        "Worship",
        "Outreach",
        "Publications",
      ],
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "media" }
);

const mediaModel = mongoose.model("Media", mediaSchema, "media");
module.exports = mediaModel;
