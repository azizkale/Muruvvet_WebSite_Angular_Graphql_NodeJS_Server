const Gallery = require("../../../DbModels/Gallery");

const getGalleryInfos = async () => {
  const galleryInfoArray = await Gallery.find();
  return galleryInfoArray;
};

module.exports = getGalleryInfos;
