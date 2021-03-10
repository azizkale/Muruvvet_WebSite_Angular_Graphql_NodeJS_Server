// const db = require("../../../DbConfiguration");

// const getUsers = async (_, { path }) => {
//   let userArray = [];
//   db.ref(path).on("value", (snapshot) => {
//     const data = snapshot.val();
//     userArray = Object.values(data);
//   });
//   return userArray;
// };

// module.exports = getUsers;
