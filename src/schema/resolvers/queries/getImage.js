const Image = require("../../../DbModels/Images");

const getImages = async (_, { galleryID }) => {
  const imageArray = await Image.find({ galleryId: galleryID });
  return imageArray;
};

module.exports = getImages;
