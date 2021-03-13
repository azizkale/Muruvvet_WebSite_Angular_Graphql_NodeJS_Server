const Gallery = require("../../../DbModels/Gallery");

const updateImage = async (_, { galleryId, image }) => {
  await Gallery.updateOne(
    { _id: galleryId, "images._id": image.id },
    {
      $set: {
        "images.$.description": image.description,
        "images.$.story": image.story,
        "images.$.index": image.index,
      },
    }
  );
  return "OK";
};

module.exports = updateImage;
