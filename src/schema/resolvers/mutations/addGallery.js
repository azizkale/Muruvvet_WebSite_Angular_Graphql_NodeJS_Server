const Gallery = require("../../../DbModels/Gallery");

const addGallery = async (_, { gallery }) => {
  const gal = JSON.parse(gallery);

  const {
    backGroungImageUrl,
    fontColor,
    fontFamily,
    fontSize,
    galleryTitle,
    googleFontLink,
  } = gal;

  const newGallery = new Gallery({
    backGroungImageUrl,
    fontColor,
    fontFamily,
    fontSize,
    galleryTitle,
    googleFontLink,
  });
  await newGallery.save();
  return newGallery;

  // //converts coming as string gallery to JSON format
  // const galleryObj = JSON.parse(gallery);

  // // gerates uniq ID
  // galleryObj.id = db.ref().push().key;

  // //adds new gallery to DB
  // db.ref(path + "/" + galleryObj.id).set(galleryObj);

  // //adds a default photo to new gallery
  // const dateNow = new Date();
  // const dateNowISO = dateNow.toDateString();
  // const defaultPhoto = {
  //   id: db.ref().push().key,
  //   url:
  //     "https://res.cloudinary.com/dhxcqjyxa/image/upload/v1610178082/Kale%20Dzigi%20Web%20Sitesi%20G%C3%B6rselleri/Ortak%20G%C3%B6rseller/default-image_j74a4q.png",
  //   description: "default photo",
  //   date: dateNowISO,
  //   index: 0,
  // };
  // db.ref("images/Galleries/" + galleryObj.id + "/" + defaultPhoto.id).set(
  //   defaultPhoto
  // );

  // return galleryObj;
};
module.exports = addGallery;
