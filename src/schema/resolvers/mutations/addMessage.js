const Message = require("../../../DbModels/Message");

const addMessage = async (_, { message }) => {
  const msg = JSON.parse(message);
  const { name, mail, message, date } = msg;
  const newMessage = new Message({ name, mail, message, date });
  await newMessage.save();
  return newMessage;
};
module.exports = addMessage;
