const Gallery = require("../../../DbModels/Gallery");

const updateGallery = async (_, { id, gallery }) => {
  const result = await Gallery.updateOne(
    { _id: id },
    {
      $set: gallery,
    }
  );
  return gallery;
};

module.exports = updateGallery;
