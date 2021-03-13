const mongoose = require("mongoose");

const Gallery = {
  galleryName: String,
  backGroungImageUrl: String,
  galleryTitle: String,
  images: [
    {
      url: String,
      thumbUrl: String,
      description: String,
      date: String,
      index: Number,
      galleryId: String,
      story: String,
    },
  ],
};

module.exports = mongoose.model("Gallery", Gallery);
