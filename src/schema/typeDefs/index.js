const typeDefs = `
type Query{
    getImages(galleryID: String!):[Image]
    getGalleryInfos:[Gallery!]
    getUsers(path: String!):[User]
}

type Mutation {
    addImage(image:String):Image
    updateImage(id: ID!, image: String!):Image
    deleteImage(id: ID!): String
    addGallery(gallery: String): Gallery
    deleteGallery(id:ID!): String
    updateGallery(id: ID!, gallery: String): Gallery
    addMessage(message: String!):Message
    deleteMessage(id: String): String
}
type Image {
    id:ID
    url: String
    description: String
    date: String   
    index: Int
    galleryId: ID
}

type Gallery {
    id: ID
    backGroungImageUrl: String   
    galleryTitle: String
    images:[Image]
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
