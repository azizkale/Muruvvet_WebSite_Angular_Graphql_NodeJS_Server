const Gallery = require("../../../DbModels/Gallery");

const deleteImage = async (_, { galleryId, imageId }) => {
  const gallery = await Gallery.findById(galleryId);

  const deletedImg = gallery.images.find((img) => img["id"] === imageId);
  const index = gallery.images.indexOf(deletedImg);
  gallery.images.splice(index, 1);

  await Gallery.updateOne(
    { _id: galleryId },
    {
      $set: gallery,
    }
  );
  return "OK";
};

module.exports = deleteImage;
