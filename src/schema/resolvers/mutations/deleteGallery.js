const Gallery = require("../../../DbModels/Gallery");

const deleteGallery = async (_, { id }) => {
  //deletes the gallery
  const result = await Gallery.deleteOne({ _id: id });

  return result["ok"];
};

module.exports = deleteGallery;
