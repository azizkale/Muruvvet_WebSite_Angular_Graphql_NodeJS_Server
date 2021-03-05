const mongoose = require("mongoose");

const Gallery = {
  backGroungImageUrl: String,
  galleryTitle: String,
  images: [
    {
      url: String,
      description: String,
      date: String,
      index: Number,
      galleryId: String,
    },
  ],
};

module.exports = mongoose.model("Gallery", Gallery);
