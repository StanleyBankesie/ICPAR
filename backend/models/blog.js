const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      enum: [
        "All",
        "Event",
        "Education",
        "Publication",
        "Initiative",
        "Statement",
        "Expansion",
      ],
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "blogs" }
);

const Blog = mongoose.model("Blog", blogSchema, "blogs");
module.exports = Blog;
