const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema({
  url: String,
  type: String,
  title: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Media", mediaSchema);
