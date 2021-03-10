const Image = require("../../../DbModels/Images");
const Gallery = require("../../../DbModels/Gallery");

const addImage = async (_, { image }) => {
  const { galleryId } = image;

  const gallery = await Gallery.findById(galleryId);
  gallery.images.push(image);
  await Gallery.updateOne(
    { _id: galleryId },
    {
      $set: gallery,
    }
  );

  return image;
};
module.exports = addImage;
