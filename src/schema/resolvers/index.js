const getImages = require("../resolvers/queries/getImage");
const getGalleryInfos = require("../resolvers/queries/getGalleryInfos");
// const getUsers = require("../resolvers/queries/getUsers");
const addImage = require("../resolvers/mutations/addImage");
const addGallery = require("../resolvers/mutations/addGallery");
const updateGallery = require("../resolvers/mutations/updateGallery");
const updateImage = require("../resolvers/mutations/updateImage");
const deleteImage = require("../resolvers/mutations/deleteImage");
const deleteGallery = require("../resolvers/mutations/deleteGallery");
const addMessage = require("../resolvers/mutations/addMessage");

const resolvers = {
  Query: {
    getImages,
    getGalleryInfos,
    // getUsers,
  },
  Mutation: {
    addImage,
    updateImage,
    deleteImage,
    addGallery,
    updateGallery,
    deleteGallery,
    addMessage,
  },
};

module.exports = resolvers;
