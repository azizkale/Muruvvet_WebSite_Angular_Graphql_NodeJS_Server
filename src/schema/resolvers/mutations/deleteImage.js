const Image = require("../../../DbModels/Images");

const deleteImage = async (_, { id }) => {
  const result = await Image.deleteOne({ _id: id });
  return result["ok"];
};

module.exports = deleteImage;
