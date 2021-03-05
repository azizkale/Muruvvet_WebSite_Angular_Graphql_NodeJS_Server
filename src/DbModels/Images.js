const mongoose = require("mongoose");

const Image = {
  url: String,
  description: String,
  date: String,
  index: Number,
  galleryId: String,
};

module.exports = mongoose.model("Image", Image);
