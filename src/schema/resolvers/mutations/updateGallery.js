const Gallery = require("../../../DbModels/Gallery");

const updateGallery = async (_, { id, gallery }) => {
  const updatedGallery = JSON.parse(gallery);

  const result = await Gallery.updateOne(
    { _id: id },
    {
      $set: updatedGallery,
    }
  );
  return updatedGallery;
};

module.exports = updateGallery;
