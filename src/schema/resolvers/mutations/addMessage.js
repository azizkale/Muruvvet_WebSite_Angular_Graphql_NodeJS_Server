const Message = require("../../../DbModels/Message");

const addMessage = async (_, { messagee }) => {
  const msg = JSON.parse(messagee);
  const { name, mail, message, date } = msg;
  const newMessage = new Message({ name, mail, message, date });
  await newMessage.save();
  return newMessage;
};
module.exports = addMessage;
