const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema({
  title: {
    type: String
  },
  type: {
    type: String
  },
  url: {
    type: String,
  },
  description: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const mediaModel = mongoose.model("Media", mediaSchema);
module.exports = mediaModel;
