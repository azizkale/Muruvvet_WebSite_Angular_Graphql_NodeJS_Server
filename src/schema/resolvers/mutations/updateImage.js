const Image = require("../../../DbModels/Images");

const updateImage = async (_, { id, image }) => {
  const imageObj = JSON.parse(image);
  const result = await Image.updateOne(
    { _id: id },
    {
      $set: imageObj,
    }
  );
  return imageObj;
};

module.exports = updateImage;
