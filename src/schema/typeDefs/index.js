const typeDefs = `
type Query{
    getImages(galleryID: String!):[Image]
    getGalleryInfos:[Gallery]
    getUsers(path: String!):[User]
}

type Mutation {
    addImage(image:inputImage):Image
    updateImage(galleryId: ID!, image: inputImage!):Image
    deleteImage(galleryId: ID!, imageId: ID!): String
    addGallery(gallery: inputGallery!): Gallery
    deleteGallery(id:ID!): String
    updateGallery(id: ID!, gallery: inputGallery!): Gallery
    addMessage(message: String!):Message
    deleteMessage(id: String): String
}
type Image {
    id:ID
    url: String
    thumbUrl: String
    description: String
    date: String   
    index: Int
    galleryId: ID
    story: String
}

type Gallery {
    id: ID
    galleryName: String
    backGroungImageUrl: String   
    galleryTitle: String
    images:[Image]
}

input inputGallery{
    id: ID
    galleryName: String
    backGroungImageUrl: String   
    galleryTitle: String
    images:[inputImage]
}

input inputImage{
    id:ID
    url: String
    thumbUrl: String
    description: String
    date: String   
    index: Int
    galleryId: ID
    story: String

}
type User {
    id: ID
    password: ID
    userName: String
}

type Message{
    id:ID
    name: String
    mail: String
    date: String
    message: String
}

`;

module.exports = typeDefs;
