const Image = require("../../../DbModels/Images");

const addImage = async (_, { image }) => {
  const img = JSON.parse(image);
  const { description, url, index, galleryId, date } = img;
  const newImage = new Image({ description, url, index, galleryId, date });
  await newImage.save();
  return newImage;
};
module.exports = addImage;
