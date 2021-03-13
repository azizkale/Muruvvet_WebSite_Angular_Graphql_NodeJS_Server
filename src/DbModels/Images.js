const mongoose = require("mongoose");

const Image = {
  url: String,
  thumbUrl: String,
  description: String,
  date: String,
  index: Number,
  galleryId: String,
  story: String,
};

module.exports = mongoose.model("Image", Image);
