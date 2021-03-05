const Gallery = require("../../../DbModels/Gallery");
const Image = require("../../../DbModels/Images");

const deleteGallery = async (_, { id }) => {
  //deletes the gallery
  const result = await Gallery.deleteOne({ _id: id });
  // deletes images of the gallery
  const result2 = await Image.deleteMany({
    galleryId: id,
  });
  return result["ok"];
};

module.exports = deleteGallery;
